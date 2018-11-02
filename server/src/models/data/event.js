const mongoose = require("mongoose");
const {Schema} = mongoose;
const Review = require("models/review");

const Events = new Schema({
    areaCd: String,
    area: String,
    eventNo: String,
    eventNm: String,
    eventTerm: String,
    startDt: String,
    reviews: [Review],
    likes: {type: Number, default: 0}
});

module.exports = mongoose.model("Events", Events);