const mongoose = require("mongoose");
const {Schema} = mongoose;
const {AccountSchema} = require("models/account");
const {ReviewSchema} = require("models/review");

const Events = new Schema();
Events.add({
    areaCd: String,
    area: String,
    eventNo: String,
    eventNm: String,
    eventTerm: String,
    startDt: String,
    reviews: [ReviewSchema],
    likes: {type: Number, default: 0},
    type: {type: String, default: "event"}
});

Events.methods.likeUp = function(id){
    this.likes.update({"_id": id}, {"$inc": {likes: 1}});
    this.save(err => {
        if(err) return console.log(err);
    })
};

Events.methods.reviewCreate = function(review){
    this.reviews.push(review);
    this.save(err => {
        if(err) return console.log(err);
    });
};

module.exports.EventsSchema = Events;
module.exports.Events = mongoose.model("Event", Events);
