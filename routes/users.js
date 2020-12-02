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
    const foundUser = await User.findOne({ email });
    console.log({ foundUser });
    if (foundUser !== null) {
      res.status(200);
      res.json({
        message: 'user is already exist!',
        user: foundUser
      });
    } else {

      /**
       * Create a new user object to add to the DB.
       */
      const user = new User({
        user_name: user_name,
        email: email
      });

      /**
       * saves user to database,
       * * and returns it to "front-end".
       */
      const createdUser = await user.save();
      console.log({ createdUser });
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
 * Update the user by "email".
 */
router.put('/update_user', async function (req, res) {
  try {

    /**
     * get email from body.
     */
    const { email } = req.body;

    /**
     * email is required to find and update user.
     */
    if (!email) {
      res.status(400);
      res.json({ message: 'The email is required for update' });
      return;
    };

    /**
     * update user by email.
     */
    const filter = { email };
    const update = {};

    /**
     * remove undefined values.
     */
    for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        const element = req.body[key];

        /**
         * if undefined or is email, no need to it
         * * bz no need to send "email" to update.
         */
        if (
          element !== undefined
          ||
          key !== 'email'
        ) {
          update[key] = element;
        };
      };
    };

    /**
     * check if object is empty.
     */
    const isUpdateObjEmpty = Object.keys(update).length === 0;

    /**
     * hanlde if there is no data on object.
     */
    if (isUpdateObjEmpty) {
      res.status(400);
      res.json({ message: 'No data to update' });
      return;
    };

    /**
     * update user.
     */
    const updatedUser = await User.findOneAndUpdate(
      filter,
      update,
      {
        new: true
      }
    );
    console.log({ updatedUser })
    res.status(200);
    res.json({
      updatedUser,
      message: 'The user has been updated'
    });

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