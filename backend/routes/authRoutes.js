exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }

  return res.status(403).json({
    message: "Access denied: Admin only",
  });
};
const express = require("express");
const router = express.Router();

const { register, loginUser } = require("../controllers/authController");

// Register
router.post("/register", register);

// Login
router.post("/login", loginUser);

module.exports = router;
