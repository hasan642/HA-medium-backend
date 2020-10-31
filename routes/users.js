const express = require('express');
const User = require('../database/schemas').user;

/**
 * create router.
 */
const router = express.Router();

/**
 * ceate new user.
 * 
 * * if user is exist return the user details,
 * * otherwise create it and return data of "User" schema type.
 */
router.post('/create_user', async function (req, res) {
  try {

    /**
     * grap data from body.
     */
    const {
      user_name,
      email,
      profile_picture
    } = req.body;

    /**
     * username and email are required.
     */
    if (!(user_name && email)) {
      res.status(400);
      res.json({ error: 'username and email required' });
    };

    /**
     * to check if email is already exist or not.
     */
    const foundUser = await User.findOne({ email: email });
    if (foundUser !== null) {
      res.status(200);
      res.json({
        message: 'user is already exist!',
        user: foundUser
      });
    } else {

      /**
       * handle if profile picture is not provided,
       * * will take the default one.
       */
      const userProfilePic = profile_picture && {
        profile_picture: profile_picture
      };

      /**
       * Create a new user object to add to the DB.
       */
      const user = new User({
        user_name: user_name,
        email: email,
        ...userProfilePic
      });

      /**
       * saves user to database,
       * * and returns it to "front-end".
       */
      const createdUser = await user.save();
      res.status(201);
      res.json({
        message: 'A new user has been created!',
        user: createdUser
      });

    };
  } catch (error) {
    res.status(400);
    res.json({ message: error });
  };
});

/**
 * get the users list.
 */
router.get('/', function (req, res, next) {

  /**
   * render default view.
   */
  res.render('default');

});

/**
 * export reouter module as default.
 */
module.exports = router;