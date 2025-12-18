const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");
const { getAllUsers } = require("../controllers/adminController");

/* =========================
   ADMIN ROUTES
========================= */

// GET all users (ADMIN ONLY)
router.get("/users", protect, adminOnly, getAllUsers);

module.exports = router;
