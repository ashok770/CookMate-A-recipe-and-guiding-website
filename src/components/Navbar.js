import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  // 🔐 Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <NavLink to="/" className="brand">
          <img src={logo} alt="CookMate Logo" className="brand-logo" />
          <span className="brand-name">CookMate</span>
        </NavLink>

        {/* NAV LINKS */}
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/guides">Cooking Guides</NavLink>
          <NavLink to="/blog">Blog</NavLink>

          {/* 🔐 USER LOGGED IN */}
          {user && (
            <>
              {/* show My Profile only for non-admin users */}
              {!isAdmin && <NavLink to="/profile">My Profile</NavLink>}

              {/* 🛡️ ADMIN ONLY LINKS */}
              {isAdmin && (
                <>
                  <NavLink to="/admin/dashboard" className="admin-link">
                    Admin Panel
                  </NavLink>
                </>
              )}

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}

          {/* 🚪 NOT LOGGED IN */}
          {!user && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
