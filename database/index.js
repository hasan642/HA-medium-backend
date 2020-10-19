const mongoose = require('mongoose');

/**
 * connect to "mongoDB" database.
 */
const userName = 'hasanal_1995';
const password = '67uvEpemYIZrHQK0';
const DATABASE_URL =
    "mongodb+srv://" +
    userName +
    ":" +
    password +
    "@cluster0.alzfr.mongodb.net/medium-db?retryWrites=true&w=majority";

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