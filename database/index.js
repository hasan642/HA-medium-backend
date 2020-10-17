const mongoose = require('mongoose');

/**
 * connect to "mongoDB" database.
 */
const DATABASE_URL = "mongodb+srv://cluster0.alzfr.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(
    DATABASE_URL,
    (err) => {
        if (err) console.log('error in connect to mongoDB', err);
        else console.log("successful connection to mongoDB");
    }
);

/**
 * export as default.
 */
module.exports = mongoose;