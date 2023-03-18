<<<<<<< HEAD
require("dotenv").config();
require("./config/database");
=======
require('dotenv').config()
require('./backend/config/db')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cors = require('cors')
>>>>>>> db7f2e4b8f6ba59fc7a6a574a5961cb757236741

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require("./config/database");

<<<<<<< HEAD
const app = express();

app.use(logger("dev"));
app.use(express.json());
=======
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(logger('dev'))
app.use(express.json())
>>>>>>> db7f2e4b8f6ba59fc7a6a574a5961cb757236741

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
// Put API routes here, before the "catch all" route

<<<<<<< HEAD
app.get("/api", (req, res) => {
  res.json({ message: "The API is alive!!!" });
});
=======
// app.get('/api', (req, res) => {
//   res.json({ message: 'The API is alive!!!' })
// })
app.use(require('./backend/config/checkToken'))
app.use('/api/users', require('./backend/routes/api/users'))
app.use('/api/reviews', require('./backend/controllers/reviewController'))
>>>>>>> db7f2e4b8f6ba59fc7a6a574a5961cb757236741

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
