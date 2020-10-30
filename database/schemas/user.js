const mongoose = require('../');

/**
 * custom subscription schema.
 */
const SubscriptionSchema = mongoose.Schema({
    subscription: {
        type: Boolean,
        default: false
    },
    subscription_date: {
        type: Date,
        default: new Date().getTime(),
    }
});

/**
 * create user schema.
 */
const User = mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date().getTime()
    },
    updated_at: {
        type: Date,
        default: new Date().getTime()
    },
    subscription: {
        type: SubscriptionSchema,
        default: null,
        required: false
    }
});

/**
 * create user model and export it.
 */
module.exports = mongoose.model("users", User);