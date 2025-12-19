import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import blogData from "../data/blogData";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <h2 style={{ textAlign: "center" }}>Blog not found</h2>;
  }

  return (
    <div className="blog-detail">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/blog">Blog</Link>
        <span>/</span>
        <span className="current">{blog.title}</span>
      </div>

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back to Blogs
      </button>

      <h1>{blog.title}</h1>

      <div className="blog-detail-meta">
        <span>{blog.author}</span>
        <span> • {blog.date}</span>
      </div>

      <img src={blog.image} alt={blog.title} />

      <p className="blog-detail-content">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
