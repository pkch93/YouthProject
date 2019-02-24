const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const MyPolicySchema = new Schema({
    like: {
        type: Boolean,
        default: false
    },
    take: {
        type: Boolean,
        default: false
    },
    user: {
        type: ObjectId,
        ref: 'user'
    },
    policy: {
        type: ObjectId,
        ref: 'policy'
    }
});

module.exports = mongoose.model('my_policy', MyPolicySchema);