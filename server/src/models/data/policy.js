const mongoose = require("mongoose");
const {Schema} = mongoose;
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
    likes: {type: Number, default: 0}
});

Policy.statics.getPolicy = function(id) {
    return this.find({"busiId": id});
};

module.exports = mongoose.model("Policy", Policy);