import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById } from "../services/recipeService";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await getRecipeById(id);
        setRecipe(res.data);
      } catch (err) {
        console.error("Error loading recipe:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <p className="loading">Loading recipe...</p>;
  if (!recipe) return <h2 className="not-found">Recipe Not Found</h2>;

  const handleGoBack = () => navigate(-1);

  return (
    <div className="recipe-detail-page">
      <div className="recipe-hero">
        <img src={recipe.image} alt={recipe.title} />

        <div className="recipe-hero-content">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </div>
      </div>

      <div className="back-btn-container">
        <button onClick={handleGoBack} className="back-btn">
          <span>&larr;</span> Back to Recipes
        </button>
      </div>

      <div className="recipe-detail-container">
        <div className="recipe-left">
          <h2 className="section-title">Ingredients</h2>
          <ul>
            {(recipe.ingredients || []).map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>

          <h2 className="section-title">Steps</h2>
          <ol>
            {(recipe.steps || []).map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </div>

        <div>
          <div className="info-card">
            <h3>Recipe Info</h3>
            <p>
              <strong>Created By:</strong> {recipe.createdBy || "—"}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(recipe.createdAt).toLocaleString()}
            </p>
          </div>

          <button className="save-btn">⭐ Save to Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
