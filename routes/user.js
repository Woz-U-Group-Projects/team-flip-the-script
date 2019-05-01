const express = require('express'); //gives access to express functions
const router = express.Router(); //gives access to the router functionality of express
const mongoose = require('mongoose'); //lets mongoose parse the database stuff
const bcrypt = require('bcrypt');
const User = require('../models/user'); //lets us use the user.js model

//for restful API we don't need a log-out method. We aren't using a log-in session, we are using 
//tokens to validate the user. We set the tokens to expire, and that's how logout happens.
router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
      if (err) {
        return res.status(500).json({
          error: err,
          hash: hash,
          message: "User.js error on between 13-15"
        });
      } else {
        const user = new User({
          _id: mongoose.Types.ObjectId(),
          email: req.body.email,
          password: hash
        }); //this hashes the password. The first param is the data to hash, the second is if we want it salted or not. The number represents how many times we are salting the hashed code. 10 is considered safe
        user.save() //actually saves the user to the database
          .then()
          .catch(err); //do I need to send a response above?
      }  
  });
});

//
//db.user.insertOne({email: 'user5@example.com', password: 'if you can read this, I am not salted or hashed'})

module.exports = router;