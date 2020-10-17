const mongoose = require('../');

/**
 * create user schema.
 */
const user = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

/**
 * export user schema.
 */
module.exports = mongoose.model("User", user);;