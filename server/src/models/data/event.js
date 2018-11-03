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
    likes: {type: Number, default: 0},
    type: {type: String, default: "event"}
});

Events.methods.likeUp = function(account){
    this.likes.push(account);
    this.save(err => {
        if(err) return console.log(err);
    })
};

Events.statics.likeCount = function(id){
    return this.findById(id).likes.count();
};

Events.methods.reviewCreate = function(review){
    this.reviews.push(review);
    this.save(err => {
        if(err) return console.log(err);
    });
};

module.exports = Events;