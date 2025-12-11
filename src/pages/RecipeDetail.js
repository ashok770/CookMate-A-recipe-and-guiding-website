import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipesData";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ width: "400px", borderRadius: "10px" }}
      />
      <p>{recipe.description}</p>

      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
