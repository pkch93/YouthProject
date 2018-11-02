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

Events.methods.likeUp = function(id, category){
    if(category === "event"){
        this.update({"_id": id}, {"$inc": {likes: 1}});
    }
};

module.exports = Events;