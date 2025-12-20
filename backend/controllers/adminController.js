const User = require("../models/User");

/* ======================
   ADMIN DASHBOARD
====================== */
exports.adminDashboard = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin Dashboard",
    admin: req.user,
  });
};

/* ======================
   GET ALL USERS
====================== */
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json({
    success: true,
    count: users.length,
    users,
  });
};

/* ======================
   ADMIN ANALYTICS (COUNTS)
====================== */
exports.getAdminStats = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const admins = await User.countDocuments({ role: "admin" });
  const users = await User.countDocuments({ role: "user" });

  res.status(200).json({
    success: true,
    stats: {
      totalUsers,
      admins,
      users,
    },
  });
};
