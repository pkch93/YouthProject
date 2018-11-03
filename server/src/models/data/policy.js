const mongoose = require("mongoose");
const {Schema} = mongoose;
const {AccountSchema} = require("models/account");
const {ReviewSchema} = require("models/review");

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
    reviews: [ReviewSchema],
    likes: {type: Number, default: 0},
    type: {type: String, default: "policy"}
});

Policy.statics.getPolicy = function(id) {
    return this.find({"busiId": id});
};

Policy.methods.likeUp = function(id){
    this.likes.update({"_id": id}, {"$inc": {likes: 1}});
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

module.exports.PolicySchema = Policy;
module.exports.Policy = mongoose.model("Policy", Policy);