import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipesData";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe Not Found ❌</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} width="350" />
      <p>{recipe.description}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
