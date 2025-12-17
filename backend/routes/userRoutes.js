const express = require("express");
const router = express.Router();

const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// GET profile
router.get("/profile", protect, getUserProfile);

// UPDATE profile
router.put("/profile", protect, updateUserProfile);

module.exports = router;
