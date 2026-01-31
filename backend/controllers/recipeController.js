const Recipe = require("../models/Recipe");

// @desc   Create recipe (Admin)
// @route  POST /api/recipes
// @access Admin
const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, steps, image } = req.body;

    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      steps,
      image,
      createdBy: req.user._id,
    });

    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc   Get all recipes (Public)
// @route  GET /api/recipes
// @access Public
const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find().sort({ createdAt: -1 });
  res.json(recipes);
};

// @desc   Get recipe by ID (Public)
// @route  GET /api/recipes/:id
// @access Public
const getRecipeById = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  res.json(recipe);
};

// @desc   Update recipe (Admin)
// @route  PUT /api/recipes/:id
// @access Admin
const updateRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  Object.assign(recipe, req.body);
  const updatedRecipe = await recipe.save();

  res.json(updatedRecipe);
};

// @desc   Delete recipe (Admin)
// @route  DELETE /api/recipes/:id
// @access Admin
const deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  await recipe.deleteOne();
  res.json({ message: "Recipe removed" });
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
