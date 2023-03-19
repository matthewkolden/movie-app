require("dotenv").config();
require("./backend/config/db");

const cors = require("cors");

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});
// Put API routes here, before the "catch all" route

app.get("/api", (req, res) => {
  res.json({ message: "The API is alive!!!" });
});

// app.get('/api', (req, res) => {
//   res.json({ message: 'The API is alive!!!' })
// })

app.use(require("./backend/config/checkToken"));
app.use("/api/users", require("./backend/routes/api/users"));
app.use("/api/reviews", require("./backend/controllers/reviewController"));

app.use(require("./backend/config/checkToken"));

const ensureLoggedIn = require("./backend/config/ensureLoggedIn");
app.use("/api/users", require("./backend/routes/api/users"));
app.use("/api/reviews", require("./backend/controllers/api/reviews"));
app.use("/api/movies", require("./backend/controllers/api/movies"));

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
