import React from "react";
import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Cooking Blogs & Tips</h1>
      <p className="blog-subtitle">
        Learn cooking with simple guides, tips, and expert advice
      </p>

      <div className="blog-grid">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
