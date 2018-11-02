const mongoose = require("mongoose");
const {Schema} = mongoose;
const crypto = require("crypto");
const { generateToken } = require("lib/token");
const Policy = require("./data/policy");
const Events = require("./data/event");
const Intern = require("./data/intern");
const Govern = require("./data/govern");
const Review = require("./review")

function hash(password){
    return crypto.createHmac("sha256", process.env.SECRET_KEY).update(password).digest("hex");
}

const Account = new Schema({
    username: String,
    email: String,
    password: String,
    createdAt: {type: Date, default: Date.now},
    store: [Policy | Events | Intern | Govern],
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

Account.statics.reviewCreate = function({title, comment}){
    this.reviews.push({
        title,
        comment
    });
    this.save(err => {
        if(err) return console.log(err);
    });
}; // 리뷰 작성

module.exports = mongoose.model("Account", Account);