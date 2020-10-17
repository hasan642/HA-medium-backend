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
      res.send('username and email requoired');
    };

    /**
     * to check if email is already exust or not.
     */
    // const newUser = await User.aggregate([{ $match: { email: email } }]);
    if (false) {
      res.send('user is already exist!');
    } else {

      /**
       * Create a new user object to add to the DB.
       */
      console.log('user to bre crated', {
        user_name: user_name,
        email: email,
        id: '123'
      });

      const user = new User({
        user_name: user_name,
        email: email,
        id: '123'
      });

      /**
       * save user to database.
       */
      const addedUser = await user.save();
      console.log({ addedUser: addedUser })
      res.send(name + 'has been created!');
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