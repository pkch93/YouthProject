const mongoose = require("mongoose");
const {Schema} = mongoose;
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
    likes: {type: Number, default: 0}
});

module.exports = mongoose.model("Intern", Intern);