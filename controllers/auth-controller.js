const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const db = require('../models')

module.exports = function(app) {

  //SIGN UP - CREATE USER
  app.post('/signup', function(req, res, next) {
    console.log('POST signup');
    console.log("Req.body:", req.body)
    const username = req.body.username;
    const password = req.body.password;
    db.User.create({
      username,
      password,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      avatarURL: req.body.avatarURL,
      bio: req.body.bio
    }).then(() => db.User.findOrCreate({
      where: { username }
    })).spread((user, created) => {
      console.log("Created: ", created)
      // Create a new jwt token
      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: "60 days"
      });
      // Set a cookie
      res.cookie('RubricsApp', token, { maxAge: 100000, httpOnly: false });
      // Respond with confirmation
      res.status(200);
      res.json({
        message: 'User added successfully!',
        user: user.get({plain: true})
      })
    })
    .catch((err) => {
      if (err) {
        errors = {};
        err.errors.forEach((error) => {
          errors[error.path] = error.message;
        });
        console.log("Uhh oh!! ", errors)
        res.json({
          errors,
          signedUp: false
        })
      }
    })

  });

  //LOGIN USER
  app.post('/login', function(req, res, next) {
    console.log('POST login');
    const username = req.body.username;
    const password = req.body.password;
    // Find this user name
    db.User.findOne({ where: {username} }).then((userData) => {
      const user = userData;
      console.log("Here is the user: ", user)
      if (!user) {
        // User not found
        return res.status(400).send({ message: 'Wrong Username or Password' });
      }
      // Check the password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (!isMatch) {
          // Password does not match
          console.log('Password1: ', password)
          console.log('Password2: ', user.password)
          return res.status(400).send({ message: "Wrong Username or password"});
        }
        // Create a token
        const token = jwt.sign(
          { id: user.id, username: user.username }, process.env.SECRET,
          { expiresIn: "60 days" }
        );
        console.log(token)
        // Set a cookie and redirect to root
        res.cookie('RubricsApp', token, { maxAge: 900000, httpOnly: false });
        res.status(200)
        res.json({
          message: "Successfully logged in!",
          isLoggedIn: true,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            bio: user.bio,
            avatarURL: user.avatarURL
          },
          token: token,

        })
        next();
      });
    }).catch((err) => {
      console.log(err);
      res.json({
        message: "There was a problem logging in.  Please try again or contact support.",
        isLoggedIn: false,
        error: err
      })
    });
  });

  //LOGOUT USER
  app.get('/logout', function(req, res) {
    console.log('GET logout');
    res.clearCookie('RubricsApp');
    res.status(200)
    res.json({
      message: "Successfully logged out!",
      isLoggedIn: false
    })
  });

  app.get('/authcheck', (req, res) => {
    console.log('Auth Check');
    console.log(req.user);
    if (req.user) {
      const userId = req.user.id
      db.User.findOne({ where: { id: userId} }).then((userData) => {
        const user = userData.dataValues;
        if (!user) {
          // User not found
          console.log('Logged in but cannot find user in our database')
          return res.status(400).send({ message: 'Logged in but cannot find user in our database' });
        }
        res.status(200);
        res.json({
          message: "You are currently logged in",
          isLoggedIn: true,
          userId: req.user.id,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            bio: user.bio,
            avatarURL: user.avatarURL
          }
        });
      })
      .catch((err) => {
        if (err) {
          console.log("There was an error \n" + err);
          res.status(400);
          res.json({
            message: "There was an error \n" + err,
            isLoggedIn: false,
            userId: req.user.id,
            token: token
          });
        }
      })
    } else {
      console.log("other....")
      res.status(400);
      res.json({
        message: "You are not logged in...",
        isLoggedIn: false,
        userId: null
      })
    }
  })

}
