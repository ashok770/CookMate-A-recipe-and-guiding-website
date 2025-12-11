import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Recipes from "../pages/Recipes/Recipes";
import RecipeDetail from "../pages/RecipeDetail";
import Guides from "../pages/Guides";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />

      {/* ⭐ IMPORTANT ROUTE FOR DYNAMIC RECIPE */}
      <Route path="/recipe/:id" element={<RecipeDetail />} />

      <Route path="/guides" element={<Guides />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
