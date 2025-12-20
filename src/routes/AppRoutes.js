import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Recipes from "../pages/Recipes/Recipes";
import RecipeDetail from "../pages/RecipeDetail";
import CookingGuides from "../pages/CookingGuides";
import GuideDetail from "../pages/GuideDetail";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import AdminAnalytics from "../pages/admin/AdminAnalytics";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/guides" element={<CookingGuides />} />
      <Route path="/guide/:id" element={<GuideDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Admin */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/analyatics"
        element={
          <AdminRoute>
            <AdminAnalytics />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
