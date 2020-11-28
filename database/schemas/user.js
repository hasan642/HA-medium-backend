const mongoose = require('../');

/**
 * custom subscription schema.
 */
const SubscriptionSchema = mongoose.Schema({
    is_subscribed: {
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
    profile_picture: {
        type: String,
        default: 'avatar.png'
    },
    cover_picture: {
        type: String,
        default: 'cover.jpg'
    },
    bio: {
        type: String,
        default: null
    },
    subscription: {
        type: SubscriptionSchema,
        default: null,
        required: false
    },
});

/**
 * create user model and export it.
 */
module.exports = mongoose.model("users", User);