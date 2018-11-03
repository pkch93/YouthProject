const mongoose = require("mongoose");
const {Schema} = mongoose;
const {AccountSchema} = require("models/account");
const {ReviewSchema} = require("models/review");

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
    reviews: [ReviewSchema],
    likes: {type: Number, default: 0},
    type: {type: String, default: "intern"}
});

Intern.methods.likeUp = function(id){
    this.likes.update({"_id": id}, {"$inc": {likes: 1}});
    this.save(err => {
        if(err) return console.log(err);
    })
};

Intern.methods.reviewCreate = function(review){
    this.reviews.push(review);
    this.save(err => {
        if(err) return console.log(err);
    });
};

module.exports.InternSchema = Intern;
module.exports.Intern = mongoose.model("Intern", Intern);
