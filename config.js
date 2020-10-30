
/**
 * The config file
 */

const dotenv = require('dotenv');
const path = require('path');

/**
 * config "env" file based on variant (dev, prod).
 * 
 * "__dirname" is a global variable that gets the current
 * * directory for the file.
 */
dotenv.config({
    path: path.resolve(
        __dirname,
        process.env.NODE_ENV + '.env'
    )
});

/**
 * export requred environment variables.
 * 
 * IMPORTANT: not all variables in environments files should
 * * be exported, just the nedded varaibles. for example: no need
 * * to "NODE_ENV".
 */
module.exports = {

    /**
     * if "PORT" is not provided yet, get the default port (3000).
     */
    PORT: process.env.PORT || '3000',

    DB_USER_NAME: process.env.DB_USER_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST_NAME: process.env.DB_HOST_NAME,
    DB_TYPE: process.env.DB_TYPE,
};