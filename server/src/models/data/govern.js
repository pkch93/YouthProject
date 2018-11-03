const mongoose = require("mongoose");
const {Schema} = mongoose;
const {AccountSchema} = require("models/account");
const {ReviewSchema} = require("models/review");

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
    reviews: [ReviewSchema],
    likes: {type: Number, default: 0},
    type: {type: String, default: "govern"}
});

Govern.methods.likeUp = function(id){
    this.likes.update({"_id": id}, {"$inc": {likes: 1}});
    this.save(err => {
        if(err) return console.log(err);
    })
};

Govern.methods.reviewCreate = function(review){
    this.reviews.push(review);
    this.save(err => {
        if(err) return console.log(err);
    });
};

module.exports.GovernSchema = Govern;
module.exports.Govern = mongoose.model("Govern", Govern);