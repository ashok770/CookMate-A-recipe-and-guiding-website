const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

const {
  adminDashboard,
  getAllUsers,
  getAdminStats,
} = require("../controllers/adminController");

// ============================
// Admin Routes
// ============================
router.get("/dashboard", protect, adminOnly, adminDashboard);

router.get("/users", protect, adminOnly, getAllUsers);

// ✅ ADMIN ANALYTICS ROUTE
router.get("/stats", protect, adminOnly, getAdminStats);

module.exports = router;
