const Joi = require("joi"); // request 변수들을 검증하기 위한 api
const mongoose = require("mongoose");
const AccountSchema = require("models/account"); // Account Collection
const Account = mongoose.model("Account", AccountSchema);
const ReviewSchema = require("models/review");
const Review = mongoose.model("Review", ReviewSchema);

exports.localRegister = async ctx => {
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(4).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    });

    const result = Joi.validate(ctx.request.body, schema);
    if(result.error){
        ctx.status = 404;
        return ;
    }

    let existing = null;
    try{
        existing = await Account.findByEmailOrUsername(ctx.request.body);
    } catch(e) {
        ctx.throw(500, e);
    }

    if(existing){
        ctx.status = 409;
        ctx.body = {
            key: existing.email === ctx.request.body.email ? "email" : "username"
        }
        return ;
    }

    let account = null;
    try {
        account = await Account.localRegister(ctx.request.body);
    } catch (e) {
        ctx.throw(500, e);
    }

    let token = null;

    try{
        token = await account.generateToken();
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set("access_token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 *7 });
    ctx.body = account.username;
};

exports.localLogin = async ctx => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    
    const result = Joi.validate(ctx.request.body, schema);

    if(result.error){
        ctx.status = 400;
        return ;
    }

    const {email, password} = ctx.request.body;

    let account = null;
    
    try {
        account = await Account.findByEmail(email);
    } catch (e) {
        ctx.throw(500, e);
    }

    if(!account || !account.validatePassword(password)){
        ctx.status = 403;
        return ;
    }

    let token = null;

    try{
        token = await account.generateToken();
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set("access_token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 *7 });
    ctx.body = account.username;
};

exports.exists = async ctx => {
    const {key, value} = ctx.params;
    let account = null;

    try {
        account = await (key === "email" ? 
        Account.findByEmail(value) : Account.findByUsername(value));
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = {
        exists: account !== null
    };
};

exports.logout = async ctx => {
    ctx.cookies.set("access_token", null, {
        maxAge: 0,
        httpOnly: true
    });
    ctx.status = 204;
};

exports.check = ctx => {
    const { user } = ctx.request;

    if (!user) {
        ctx.status = 403;
        return ;
    }
    ctx.body = user.profile;
};

exports.writeReview = async ctx => {
    const account = await Account.findbyId(ctx.request.user._id);
    const {_id, category, title, content} = ctx.request.body;
    const review = new Review({
        title,
        content
    });
    
    account.reviewCreate(review);
    if(category === "policy"){
        const Policy = mongoose.model("Policy", PolicySchema);
        const policy = Policy.findById(_id);
        policy.reviewCreate(review);
    } else if (category === "event"){
        const Events = mongoose.model("Event", EventsSchema);
        const event = Events.findById(_id);
        event.reviewCreate(review);
    } else if (category === "govern"){
        const Govern = mongoose.model("Govern", GovernSchema);
        const govern = Events.findById(_id);
        govern.reviewCreate(review);
    } else if (category === "intern"){
        const Intern = mongoose.model("Intern", InternSchema);
        const intern = Intern.findById(_id);
        intern.reviewCreate(review);
    }
};
