import React from "react";
// 1. IMPORT CHANGE: Import useNavigate instead of useHistory
import { useParams, useNavigate } from "react-router-dom";
import recipes from "../data/recipesData";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  // 2. HOOK CHANGE: Initialize useNavigate hook
  const navigate = useNavigate();
  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) return <h2 className="not-found">Recipe Not Found</h2>;

  // Function to handle the back button click
  const handleGoBack = () => {
    // 3. FUNCTION CALL CHANGE: useNavigate uses -1 to go back
    navigate(-1);
  };

  return (
    <div className="recipe-detail-page">
      {/* HERO BANNER */}
      <div className="recipe-hero">
        <img src={recipe.image} alt={recipe.title} />

        <div className="recipe-hero-content">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </div>
      </div>

      {/* NEW: BACK BUTTON CONTAINER */}
      <div className="back-btn-container">
        <button onClick={handleGoBack} className="back-btn">
          {/* Using a simple arrow for the icon */}
          <span>&larr;</span> Back to Recipes
        </button>
      </div>

      <div className="recipe-detail-container">
        {/* LEFT */}
        <div className="recipe-left">
          <h2 className="section-title">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>

          <h2 className="section-title">Steps</h2>
          <ol>
            {recipe.steps.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </div>

        {/* RIGHT PANEL */}
        <div>
          <div className="info-card">
            <h3>Recipe Info</h3>
            <p>
              <strong>Category:</strong> {recipe.category}
            </p>
            <p>
              <strong>Servings:</strong> {recipe.servings}
            </p>
            <p>
              <strong>Cooking Time:</strong> {recipe.cookTime}
            </p>
          </div>

          <div className="info-card">
            <h3>Tags</h3>
            {/* Added a container for the tags for better layout control */}
            <div className="tags-container">
              {recipe.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button className="save-btn">⭐ Save to Favorites</button>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetail;
