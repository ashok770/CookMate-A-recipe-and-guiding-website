import React, { useState } from "react";
import "./CookingGuides.css";
import cookingGuides from "../data/cookingGuidesData";
import { Link } from "react-router-dom";

const CookingGuides = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

  const filteredGuides = cookingGuides.filter((guide) => {
    const matchesSearch = guide.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = filter === "All" || guide.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="cg-wrapper">
      <header className="cg-hero">
        <div className="cg-hero-inner">
          <h1>Cooking Guides</h1>
          <p>Learn techniques, skills, kitchen hacks and cooking basics!</p>
        </div>
      </header>

      <main className="cg-main container">
        <div className="cg-controls">
          <input
            className="cg-search"
            type="search"
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search guides"
          />

          <div className="cg-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cg-filter-btn ${filter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <section className="cg-grid">
          {filteredGuides.map((guide) => (
            <article className="cg-card" key={guide.id}>
              <div className="cg-card-media">
                <img src={guide.image} alt={guide.title} />
                <div className="cg-card-tag">{guide.category}</div>
              </div>

              <div className="cg-card-body">
                <h3>{guide.title}</h3>
                <p className="cg-short">{guide.shortDescription}</p>

                <div className="cg-card-actions">
                  <Link to={`/guide/${guide.id}`} className="cg-read">
                    Read More
                  </Link>
                  <div className="cg-meta">
                    <span className="cg-difficulty">{guide.difficulty}</span>
                    <span className="cg-time">{guide.time}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {filteredGuides.length === 0 && (
            <p className="cg-no">No guides found — try another search.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default CookingGuides;
