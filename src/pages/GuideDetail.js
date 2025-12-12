import React from "react";
import { useParams, Link } from "react-router-dom";
import cookingGuides from "../data/cookingGuidesData";
import "./GuideDetail.css";

const GuideDetail = () => {
  const { id } = useParams();
  const guide = cookingGuides.find((g) => Number(g.id) === Number(id));

  if (!guide) {
    return (
      <div className="gd-notfound">
        <h2>Guide not found</h2>
        <p>The guide you requested doesn't exist.</p>
        <Link to="/guides" className="gd-back">
          Back to Guides
        </Link>
      </div>
    );
  }

  return (
    <div className="gd-wrapper">
      <div
        className="gd-hero"
        style={{ backgroundImage: `url(${guide.image})` }}
      >
        <div className="gd-hero-overlay">
          <div className="container">
            <h1>{guide.title}</h1>
            <p>{guide.shortDescription}</p>
          </div>
        </div>
      </div>

      <main className="gd-main container">
        <div className="gd-grid">
          <article className="gd-left">
            <section className="gd-section">
              <h2>Overview</h2>
              <p className="gd-long">{guide.longDescription}</p>
            </section>

            <section className="gd-section">
              <h2>Steps</h2>
              <ol className="gd-steps">
                {guide.steps.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ol>
            </section>

            <section className="gd-section">
              <h2>Tips</h2>
              <ul className="gd-tips">
                {guide.tips.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="gd-right">
            <div className="gd-card">
              <h3>Guide Info</h3>
              <p>
                <strong>Category:</strong> {guide.category}
              </p>
              <p>
                <strong>Difficulty:</strong> {guide.difficulty}
              </p>
              <p>
                <strong>Time:</strong> {guide.time}
              </p>
            </div>

            <div className="gd-card">
              <h3>Tools</h3>
              <div className="gd-tools">
                {guide.tools.map((tool, i) => (
                  <span key={i} className="gd-tool">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="gd-card">
              <h3>Actions</h3>
              <button className="gd-save">⭐ Save Guide</button>
              <Link to="/guides" className="gd-backlink">
                ← Back to Guides
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default GuideDetail;
