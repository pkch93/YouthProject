const mongoose = require("mongoose");

const {AccountSchema, Account} = require("models/account");
const {PolicySchema, Policy} = require("models/data/policy");
const {EventsSchema, Events} = require("models/data/event");
const {InternSchema, Intern} = require("models/data/intern");
const {GovernSchema, Govern} = require("models/data/govern");

exports.getPolicies = async ctx => {
    const {category} = ctx.params;
    if(category === "policy"){
        const polices = await Policy.find({});
        ctx.body = polices;
    } else if (category === "event") {
        const events = await Events.find();
        ctx.body = events;
    } else if (category === "govern") {
        const governs = await Govern.find();
        ctx.body = governs;
    } else if (category === "intern"){
        const interns = await Intern.find();
        ctx.body = interns;
    } else {
        const policies = await Policy.find();
        const events = await Events.find();
        const interns = await Intern.find();
        const governs = await Govern.find();
        ctx.body = {policies, events, interns, governs};
    }
    ctx.res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
};

exports.like = async ctx => {
    const account = await Account.findById(ctx.request.user._id);

    const {id, category} = ctx.params;
    account.likeData(id, category);
};

exports.getReviews = async ctx => {
    const {id, category} = ctx.params;
    let reviews = "";
    if(category === "policy"){
        const Policy = mongoose.model("Policy", PolicySchema);
        reviews = Policy.findById(id).populate("reviews").exec();
    } else if (category === "event"){
        const Events = mongoose.model("Event", EventsSchema);
        reviews = Events.findById(id).populate("reviews").exec();
    } else if (category === "govern"){
        const Govern = mongoose.model("Govern", GovernSchema);
        reviews = Govern.findById(id).populate("reviews").exec();
    } else if (category === "intern"){
        const Intern = mongoose.model("Intern", InternSchema);
        reviews = Intern.findById(id).populate("reviews").exec();
    }
    ctx.body = reviews;
};

exports.storeData = async ctx => {
    const account = await Account.findbyId(ctx.request.user._id);
    const {id, category} = ctx.params;
    account.storeData(id, category);
};

exports.writeReview = async ctx => {
    const account = await Account.findbyId(ctx.request.user._id);
    const {id, category} = ctx.params;
    const {title, content} = ctx.request.body;
    const review = new Review({
        title,
        content
    });
    
    account.reviewCreate(review);
    if(category === "policy"){
        const Policy = mongoose.model("Policy", PolicySchema);
        const policy = Policy.findById(id);
        policy.reviewCreate(review);
    } else if (category === "event"){
        const Events = mongoose.model("Event", EventsSchema);
        const event = Events.findById(id);
        event.reviewCreate(review);
    } else if (category === "govern"){
        const Govern = mongoose.model("Govern", GovernSchema);
        const govern = Govern.findById(id);
        govern.reviewCreate(review);
    } else if (category === "intern"){
        const Intern = mongoose.model("Intern", InternSchema);
        const intern = Intern.findById(id);
        intern.reviewCreate(review);
    }
};