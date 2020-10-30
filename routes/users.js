var express = require('express');
const User = require('../database/schemas').user;

/**
 * create router.
 */
const router = express.Router();

/**
 * ceate new user.
 */
router.post('/create_user', async function (req, res) {
  try {
console.log('AAAA')
    /**
     * grap data from body.
     */
    const {
      user_name,
      email
    } = req.body;
console.log({
  user_name,
  email
})
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
      res.status(400);
      res.json({ error: 'user is already exist!' });
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
      res.json({ message: 'A new user has been created!' });
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