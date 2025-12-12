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
    <div className="guides-page">
      <h1 className="guides-title">Cooking Guides</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search guides..."
        className="guide-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER TABS */}
      <div className="guide-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`guide-filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="guides-grid">
        {filteredGuides.map((guide) => (
          <div className="guide-card" key={guide.id}>
            <img src={guide.image} alt={guide.title} />

            <h3>{guide.title}</h3>
            <p className="guide-desc">{guide.description}</p>

            <Link to={`/guide/${guide.id}`}>
              <button className="guide-btn">Read More</button>
            </Link>
          </div>
        ))}

        {filteredGuides.length === 0 && (
          <p className="no-guides">No guides found</p>
        )}
      </div>
    </div>
  );
};

export default CookingGuides;
