import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import heroBanner from "../assets/images/banner.jpg";
import recipes from "../data/recipesData";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        {/* HERO SECTION */}
        <section className="hero-section">
          <img src={heroBanner} className="hero-bg" alt="Banner" />
          <div className="hero-text">
            <h1>Cook. Share. Enjoy.</h1>
            <p>Discover easy recipes for everyday cooking</p>
            <button>Explore Recipes</button>
          </div>
        </section>

        {/* FEATURED RECIPES */}
        <section className="featured">
          <h2>Featured Recipes</h2>

          <div className="recipe-card-container">
            {recipes.slice(0, 3).map((item) => (
              <Link
                to={`/recipe/${item.id}`}
                key={item.id}
                className="recipe-card-link"
              >
                <div className="recipe-card">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <button>View Recipe</button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories">
          <h2>Popular Categories</h2>

          <div className="category-list">
            <span>🍗 Dinner</span>
            <span>🥗 Vegan</span>
            <span>🍝 Italian</span>
            <span>🍳 Breakfast</span>
            <span>🍰 Dessert</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
