import React, { useState, useEffect } from "react";
import "./Recipes.css";
import { getAllRecipes } from "../../services/recipeService";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const res = await getAllRecipes();
        setRecipes(res.data || []);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = (recipe.title || "")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory = filter === "All" || recipe.category === filter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="recipes-page">
      <h1 className="recipes-title">All Recipes</h1>

      {/* SEARCH BAR */}
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* CATEGORY FILTER */}
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
        {loading && <p className="no-results">Loading recipes...</p>}
        {!loading &&
          filteredRecipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id || recipe.id}>
              <div className="recipe-img-wrapper">
                <img src={recipe.image} alt={recipe.title} />
              </div>

              <h3>{recipe.title}</h3>

              <Link to={`/recipe/${recipe._id || recipe.id}`}>
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
