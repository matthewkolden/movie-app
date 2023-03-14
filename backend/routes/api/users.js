const express = require("express");
const router = express.Router();

const {
  checkToken,
  dataController,
  apiController,
} = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// Post /api/users/login
router.post("/login", dataController.login, apiController.auth);

// Get /api/users/check-token
router.get("/check-token", ensureLoggedIn, checkToken);

// POST /api/users
router.post("/", dataController.create, apiController.auth);

module.exports = router;
