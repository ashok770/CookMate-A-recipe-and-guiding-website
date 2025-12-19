import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="blog-link">
      <div className="blog-card">
        <img src={blog.image} alt={blog.title} />

        <div className="blog-content">
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <span className="blog-meta">
            {blog.author} • {blog.date}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
