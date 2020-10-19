const mongoose = require('../');

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
    }
});

/**
 * do smthing before 'save' event.
 */
User.pre('save', function (next) {
    console.log('do smthing before save event');

    /**
     * complete, before this will not complete.
     */
    next();
});

/**
 * create user model and export it.
 */
module.exports = mongoose.model("users", User);