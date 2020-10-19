var express = require('express');
var router = express.Router();
var User = require('../database/schemas').user;

/**
 * ceate new user.
 */
router.post('/create_user', async function (req, res) {
  try {

    /**
     * grap data from body.
     */
    const { user_name, email } = req.body;
    if (!(user_name && email)) {
      console.log('ERRPOR');
      res.send('username and email required');
    };

    /**
     * to check if email is already exust or not.
     */
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
      res.send('user is already exist!');
    } else {

      /**
       * Create a new user object to add to the DB.
       */
      const user = new User({
        user_name: user_name,
        email: email,
      });

      /**
       * save user to database.
       */
      await user.save();
      res.send(user_name + 'has been created!');
    }
  } catch (error) {
    console.log('error is', error);
    res.status(400);
    res.json({ message: error });
  }
});

/**
 * get the users list.
 */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/**
 * export reouter module as default.
 */
module.exports = router;