const mongoose = require("mongoose");
const {Schema} = mongoose;
const crypto = require("crypto");
const { generateToken } = require("lib/token");
const PolicySchema = require("./data/policy");
const EventsSchema = require("./data/event");
const InternSchema = require("./data/intern");
const GovernSchema = require("./data/govern");
const Review = require("./review")

function hash(password){
    return crypto.createHmac("sha256", process.env.SECRET_KEY).update(password).digest("hex");
}

const Account = new Schema({
    username: String,
    email: String,
    password: String,
    createdAt: {type: Date, default: Date.now},
    store: [PolicySchema | EventsSchema | InternSchema | GovernSchema],
    reviews: [Review]
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
}; // 리뷰 작성

Account.methods.likeData = function(id, category){
    if(category === "policy"){
        const Policy = mongoose.model("Policy", PolicySchema);
        const policy = Policy.findById(id);
        policy.likeUp(this);
        this.store.push(policy);
    } else if (category === "event"){
        const Events = mongoose.model("Event", EventsSchema);
        const event = Events.findById(id);
        event.likeUp(this);
        this.store.push(event);
    } else if (category === "govern"){
        const Govern = mongoose.model("Govern", GovernSchema);
        const govern = Events.findById(id);
        govern.likeUp(this);
        this.store.push(govern);
    } else if (category === "intern"){
        const Intern = mongoose.model("Intern", InternSchema);
        const intern = Intern.findById(id);
        intern.likeUp(this);
        this.store.push(intern);
    }
};

module.exports = Account;