const mongoose = require("mongoose");
const {Schema} = mongoose;
const Review = require("models/review");

const Govern = new Schema({
    rn: String,
    rcritPblancId: String,
    bsnsNm: String,
    instTyCodeNm: String,
    manageInsttNm: String,
    executeInsttNm: String,
    rcritPblancNm: String,
    wageSeCodeNm: String,
    wageAmount: String,
    workAreaCodeNm: String,
    registDt: String,
    rcritBeginDe: String,
    rcritEndDe: String,
    reviews: [Review],
    likes: {type: Number, default: 0},
    type: {type: String, default: "govern"}
});

Govern.methods.likeUp = function(account){
    this.likes.push(account);
    this.save(err => {
        if(err) return console.log(err);
    })
};

Govern.statics.likeCount = function(id){
    return this.findById(id).likes.count();
};

Govern.methods.reviewCreate = function(review){
    this.reviews.push(review);
    this.save(err => {
        if(err) return console.log(err);
    });
};

module.exports = Govern;