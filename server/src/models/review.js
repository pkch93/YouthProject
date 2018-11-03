const mongoose = require("mongoose");
const {Schema} = mongoose;

const Review = new Schema({
    title: String,
    content: String,
});

module.exports.ReviewSchema = Review;
module.exports.Review = mongoose.model("Review", Review);
