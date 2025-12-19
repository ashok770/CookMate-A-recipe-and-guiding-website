const User = require("../models/User");

/* ======================
   GET PROFILE
====================== */
exports.getUserProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ======================
   UPDATE PROFILE
====================== */
exports.updateUserProfile = async (req, res) => {
  try {
    const { name } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update name if provided
    if (name) {
      user.name = name;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// for the avtar
exports.updateAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.avatar = `/uploads/avatars/${req.file.filename}`;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Avatar updated successfully",
      avatar: user.avatar,
    });
  } catch (error) {
    res.status(500).json({ message: "Avatar upload failed" });
  }
};
