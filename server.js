//**** DEPENDENCIES ****//
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const acceptOverride = require('connect-acceptoverride');
var cors = require('cors')
const db = require("./models");

//**** MIDDLEWARE ****//
app.use(express.static('public'))
app.use(bodyParser({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(acceptOverride())
app.use(cors())

//**** AUTH MIDDLEWARE ****//
var checkAuth = function (req, res, next) {
  const auth = req.header('Authorization')

  if (typeof auth === 'undefined' || auth === null) {
    req.user = null;
  } else {
    const token = auth.slice(7);
    const decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }
  next();
}
app.use(checkAuth);

// **** CONTROLLERS **** //
require('./controllers/auth-controller.js')(app);
require('./controllers/rubrics-controller.js')(app);
require('./controllers/users-controller.js')(app);
require('./controllers/competencies-controller.js')(app);
require('./controllers/scales-controller.js')(app);
require('./controllers/criteria-controller.js')(app);
require('./controllers/assessments-controller.js')(app);

app.get('/', function(req, res) {
  res.send('Rubrics App backend up and running!');
});

var PORT = process.env.PORT || 8000;

app.listen(PORT, function(req, res) {
  console.log("Rubrics App listening on port " + PORT + "...");
  db.sequelize.sync({ force: false })
  .then(() => console.log('... Sequelize synced with Database!'))
  .catch(e => console.log("Errors syncing with Sequelize: ", e))
});
