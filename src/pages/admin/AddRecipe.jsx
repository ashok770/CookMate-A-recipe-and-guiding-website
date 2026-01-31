import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../services/recipeService";
import "./RecipeForm.css";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    image: "",
    cookingTime: "",
    servings: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title.trim()) {
      setError("Recipe title is required");
      return;
    }
    if (!formData.description.trim()) {
      setError("Description is required");
      return;
    }
    if (!formData.ingredients.trim()) {
      setError("Ingredients are required");
      return;
    }
    if (!formData.instructions.trim()) {
      setError("Instructions are required");
      return;
    }
    if (!formData.cookingTime || formData.cookingTime <= 0) {
      setError("Cooking time must be greater than 0");
      return;
    }
    if (!formData.servings || formData.servings <= 0) {
      setError("Servings must be greater than 0");
      return;
    }

    setLoading(true);
    try {
      // Convert ingredients/instructions into arrays expected by backend
      const payload = {
        title: formData.title,
        description: formData.description,
        ingredients: formData.ingredients
          .split(/\r?\n|,/) // split by newline or comma
          .map((s) => s.trim())
          .filter(Boolean),
        steps: formData.instructions
          .split(/\r?\n|\.|\n/) // split into steps by newline or sentence
          .map((s) => s.trim())
          .filter(Boolean),
        image: formData.image,
        cookingTime: formData.cookingTime,
        servings: formData.servings,
      };

      await createRecipe(payload);
      navigate("/admin/recipes");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Error creating recipe. Please try again.",
      );
      console.error("Error creating recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recipe-form-container">
      <div className="recipe-form-card">
        <div className="form-header">
          <h2>Add New Recipe</h2>
          <p>Fill in the details to create a new recipe</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="recipe-form">
          <div className="form-group">
            <label htmlFor="title">Recipe Title *</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="e.g., Chocolate Cake"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your recipe..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label>Recipe Image (upload or URL)</label>
            <div className="image-upload-wrapper">
              <input
                className="image-input"
                type="file"
                accept="image/*"
                onChange={handleImageFileChange}
              />
              <p style={{ margin: "10px 0 0 0", color: "#666" }}>
                Or paste an image URL
              </p>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={formData.image}
                onChange={handleChange}
              />
              {formData.image && (
                <div className="image-preview">
                  <img src={formData.image} alt="Preview" />
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="ingredients">Ingredients *</label>
            <textarea
              id="ingredients"
              name="ingredients"
              placeholder="List ingredients (comma separated or line by line)"
              value={formData.ingredients}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="instructions">Instructions *</label>
            <textarea
              id="instructions"
              name="instructions"
              placeholder="Step by step cooking instructions..."
              value={formData.instructions}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cookingTime">Cooking Time (minutes) *</label>
              <input
                id="cookingTime"
                type="number"
                name="cookingTime"
                placeholder="30"
                value={formData.cookingTime}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="servings">Servings *</label>
              <input
                id="servings"
                type="number"
                name="servings"
                placeholder="4"
                value={formData.servings}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? "Creating..." : "Add Recipe"}
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate("/admin/recipes")}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
