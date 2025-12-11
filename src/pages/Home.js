import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import heroBanner from "../assets/images/banner.jpg";
import chickenImg from "../assets/images/chicken.jpg";
import bowlImg from "../assets/images/bowl.png";
import cakeImg from "../assets/images/cake.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Main Wrapper */}
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
            {/* Card 1 */}
            <Link to="/recipe/1" className="recipe-card-link">
              <div className="recipe-card">
                <img src={chickenImg} alt="Chicken" />
                <h3>Roasted Chicken</h3>
                <button>View Recipe</button>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/recipe/2" className="recipe-card-link">
              <div className="recipe-card">
                <img src={bowlImg} alt="Vegan Bowl" />
                <h3>Vegan Bowl</h3>
                <button>View Recipe</button>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/recipe/3" className="recipe-card-link">
              <div className="recipe-card">
                <img src={cakeImg} alt="Cake" />
                <h3>Chocolate Cake</h3>
                <button>View Recipe</button>
              </div>
            </Link>
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
