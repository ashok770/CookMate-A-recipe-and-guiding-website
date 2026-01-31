const express = require("express");
const router = express.Router();

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

const { protect } = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

// Public
router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);

// Admin only
router.post("/", protect, isAdmin, createRecipe);
router.put("/:id", protect, isAdmin, updateRecipe);
router.delete("/:id", protect, isAdmin, deleteRecipe);

module.exports = router;
