const mongoose = require("mongoose");
const {Schema} = mongoose;
const AccountSchema = require("models/account");
const Review = require("models/review");

const Policy = new Schema({
    busiId: String,
    busiNm: String,
    dtlBusiNm: String,
    busiSum: String,
    chargerOrgNm: String,
    onlineApplPossYn: String,
    applUrl: String,
    detalUrl: String,
    ageEtcCont: String,
    edubgEtcCont: String,
    empEtcCont: String,
    relInfoUrl: String,
    chargerClcd: String,
    reviews: [Review],
    likes: [AccountSchema],
    type: {type: String, default: "policy"}
});

Policy.statics.getPolicy = function(id) {
    return this.find({"busiId": id});
};

Policy.statics.likeCount = function(id){
    return this.findById(id).likes.count();
};

Policy.methods.likeUp = function(account){
    this.likes.push(account);
    this.save(err => {
        if(err) return console.log(err);
    });
};

Policy.methods.reviewCreate = function(review){
    this.reviews.push(review);
    this.save(err => {
        if(err) return console.log(err);
    });
};

module.exports = Policy;