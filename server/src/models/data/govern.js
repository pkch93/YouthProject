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
    likes: {type: Number, default: 0}
});

module.exports = Govern;