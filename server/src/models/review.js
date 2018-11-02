const mongoose = require("mongoose");
const {Schema} = mongoose;

const Review = new Schema({
    title: String,
    content: String,
    recommend: {type: Number, min:0, max:5}
});

module.exports = Review;