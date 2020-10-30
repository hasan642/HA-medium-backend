const mongoose = require('../');

/**
 * create tutorial schema.
 */
const Tutorial = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date().getTime()
    },
    updated_at: {
        type: Date,
        default: new Date().getTime()
    },
});

/**
 * create user model and export it.
 */
module.exports = mongoose.model("tutorials", Tutorial);