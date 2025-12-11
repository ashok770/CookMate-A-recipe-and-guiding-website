import React, { useState } from "react";
import "./Recipes.css";
import recipes from "../../data/recipesData";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory = filter === "All" || recipe.category === filter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="recipes-page">
      <h1 className="recipes-title">All Recipes</h1>

      {/* SEARCH BAR */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="recipes-grid">
        {filteredRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />

            <h3>{recipe.title}</h3>

            <Link to={`/recipe/${recipe.id}`}>
              <button className="view-btn">View Recipe</button>
            </Link>
          </div>
        ))}

        {filteredRecipes.length === 0 && (
          <p className="no-results">No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
