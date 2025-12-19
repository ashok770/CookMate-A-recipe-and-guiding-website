const User = require("../models/User");

// ============================
// Admin Dashboard
// ============================
exports.adminDashboard = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin Dashboard",
    admin: req.user,
  });
};

// ============================
// Get All Users
// ============================
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).json({
    success: true,
    total: users.length,
    users,
  });
};

// ============================
// Admin Analytics (COUNTS)
// ============================
exports.getAdminStats = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalAdmins = await User.countDocuments({ role: "admin" });
  const totalNormalUsers = await User.countDocuments({ role: "user" });

  res.status(200).json({
    success: true,
    stats: {
      totalUsers,
      totalAdmins,
      totalNormalUsers,
    },
  });
};
