const express = require("express");
const router = express.Router();

const { register, loginUser } = require("../controllers/authController");

// Register
router.post("/register", register);

// Login
router.post("/login", loginUser);

module.exports = router;
