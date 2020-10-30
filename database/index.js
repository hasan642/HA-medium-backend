const mongoose = require('mongoose');
const {
    DB_USER_NAME,
    DB_PASSWORD,
    DB_HOST_NAME,
    DB_TYPE
} = require('../config');

/**
 * connect to "mongoDB" database.
 */
const DATABASE_URL = DB_TYPE + DB_USER_NAME + ":" + DB_PASSWORD + DB_HOST_NAME;

/**
 * connect to the database.
 */
mongoose.connect(
    DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(res => {
        console.log('[database CONNECTED]')
    })
    .catch(error => {
        console.log('ERROR:', error)
    });

/**
 * export as default.
 */
module.exports = mongoose;