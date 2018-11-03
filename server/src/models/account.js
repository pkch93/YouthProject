const mongoose = require("mongoose");
const {Schema} = mongoose;
const crypto = require("crypto");
const { generateToken } = require("lib/token");
const {PolicySchema, Policy} = require("./data/policy");
const {EventsSchema, Events} = require("./data/event");
const {InternSchema, Intern} = require("./data/intern");
const {GovernSchema, Govern} = require("./data/govern");

const {ReviewSchema} = require("./review")

function hash(password){
    return crypto.createHmac("sha256", process.env.SECRET_KEY).update(password).digest("hex");
}

const Account = new Schema({
    username: String,
    email: String,
    password: String,
    createdAt: {type: Date, default: Date.now},
    store: [PolicySchema | EventsSchema | InternSchema | GovernSchema],
    like: [PolicySchema | EventsSchema | InternSchema | GovernSchema],
    reviews: [ReviewSchema]
});

Account.statics.findByUsername = function(username){
    return this.findOne({"username": username}).exec();
};

Account.statics.findByEmail = function(email){
    return this.findOne({email}).exec();
};

Account.statics.findByEmailOrUsername = function({username, email}){
    return this.findOne({
        $or: [ {"username": username}, {email}]
    }).exec();
};

Account.statics.localRegister = function({username, email, password}){
    const account = new this({
        username,
        email,
        password: hash(password)
    });
    return account.save();
};

Account.methods.validatePassword = function(password){
    const hashed = hash(password);
    return this.password === hashed;
};

Account.methods.generateToken = function(){
    const payload = {
        _id: this._id,
        username: this.username
    };
    return generateToken(payload);
};

Account.methods.reviewCreate = function(review){
    this.reviews.push(review);
    this.save(err => {
        if(err) return console.log(err);
    });
};

Account.methods.storeData = async function(id, category){
    if(category === "policy"){
        const policy = await Policy.findById(id).exec();
        this.store.push(policy);
    } else if (category === "event"){
        const event = await Events.findById(id).exec();
        this.store.push(event);
    } else if (category === "govern"){
        const govern = await Govern.findById(id).exec();
        this.store.push(govern);
    } else if (category === "intern"){
        const intern = await Intern.findById(id).exec();
        this.store.push(intern);
    }
};
Account.methods.likeData = async function(id, category){
    if(category === "policy"){
        const policy = await Policy.findById(id).exec();
        policy.likeUp(this);
        this.like.push(policy);
    } else if (category === "event"){
        const event = await Events.findById(id).exec();
        event.likeUp(this);
        this.like.push(event);
    } else if (category === "govern"){
        const govern = await Govern.findById(id).exec();
        govern.likeUp(this);
        this.like.push(govern);
    } else if (category === "intern"){
        const intern = await Intern.findById(id).exec();
        intern.likeUp(this);
        this.like.push(intern);
    }
};

module.exports.AccountSchema = Account;
module.exports.Account = mongoose.model("Account", Account);