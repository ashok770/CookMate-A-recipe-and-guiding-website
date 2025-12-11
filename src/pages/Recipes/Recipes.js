import React from "react";
import "./Recipes.css";

// 1. IMPORT the image files
import cholebhatureImage from "./images/cholebatrue.jpg";
import panipuriImage from "./images/panipuri.jpg";
import vadapauImage from "./images/vadapau.jpg";

const recipes = [
  {
    id: 1,
    title: "Chole Bhature",
    // 2. Use the imported variable
    image: cholebhatureImage,
  },
  {
    id: 2,
    title: "Pani Puri",
    // 2. Use the imported variable
    image: panipuriImage,
  },
  {
    id: 3,
    title: "Vada Pau",
    // 2. Use the imported variable
    image: vadapauImage,
  },
];

const Recipes = () => {
  return (
    <div className="recipes-page">
      <h1>All Recipes</h1>

      <input
        type="text"
        className="search-bar"
        placeholder="Search recipes..."
      />

      <div className="filter-buttons">
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
        <button>Dessert</button>
      </div>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            {/* The src now receives the correct web path from the imported variable */}
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <button className="view-btn">View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
