const express = require("express");
const router = express.Router();

const {
  adminDashboard,
  getAllUsers,
  getAdminStats,
} = require("../controllers/adminController");

const { protect, isAdmin } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, isAdmin, adminDashboard);
router.get("/users", protect, isAdmin, getAllUsers);
router.get("/stats", protect, isAdmin, getAdminStats);

module.exports = router;
