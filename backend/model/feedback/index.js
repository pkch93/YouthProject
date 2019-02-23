const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const FeedbackSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    writer: {
        type: ObjectId,
        required: true,
        ref: 'user'
    },
    policy: {
        type: ObjectId,
        required: true,
        ref: 'policy'
    }
});

module.exports = mongoose.model('feedback', FeedbackSchema);