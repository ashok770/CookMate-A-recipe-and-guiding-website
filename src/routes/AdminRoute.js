import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  // Get user from localStorage
  const userStr = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  // Parse user safely
  let user = null;
  try {
    user = userStr ? JSON.parse(userStr) : null;
  } catch (error) {
    console.error("Error parsing user data:", error);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  // Check if user exists, has token, and is admin
  if (!token || !user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
