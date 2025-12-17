const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { updateAvatar } = require("../controllers/userController");

const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// GET profile
router.get("/profile", protect, getUserProfile);

// UPDATE profile
router.put("/profile", protect, updateUserProfile);

// update avatar
router.put("/profile/avatar", protect, upload.single("avatar"), updateAvatar);

module.exports = router;
