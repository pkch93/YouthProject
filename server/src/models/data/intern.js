const mongoose = require("mongoose");
const {Schema} = mongoose;
const AccountSchema = require("models/account");
const Review = require("models/review");

const Intern = new Schema({
    wantedAuthNo: String,
    companyNm: String,
    collectJobsNm: String,
    regionNm: String,
    minEdubg: String,
    maxEdubg: String,
    collectPsncnt: String,
    selPsncnt: String,
    applyDt: String,
    detailUrl: String,
    reviews: [Review],
    likes: [AccountSchema],
    type: {type: String, default: "intern"}
});

Intern.methods.likeUp = function(account){
    this.likes.push(account);
    this.save(err => {
        if(err) return console.log(err);
    })
};

Intern.statics.likeCount = function(id){
    return this.findById(id).likes.count();
};


Intern.methods.reviewCreate = function(review){
    this.reviews.push(review);
    this.save(err => {
        if(err) return console.log(err);
    });
};

module.exports = Intern;