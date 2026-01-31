import React, { useEffect, useState } from "react";
import { getAdminStats } from "../../api/adminApi";
import AdminRecipes from "./AdminRecipes";
import AdminAnalytics from "./AdminAnalytics";
import UsersTable from "./UsersTable";
import "./AdminDashboard.css";

import { useNavigate } from "react-router-dom";

const ProfilePanel = () => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem("user");
  let user = null;
  try {
    user = userStr ? JSON.parse(userStr) : null;
  } catch (err) {
    user = null;
  }

  if (!user) {
    return (
      <div className="profile-panel">
        <p>No profile data available.</p>
      </div>
    );
  }

  return (
    <div className="profile-panel">
      <div className="profile-row">
        <img
          src={
            user.avatar
              ? `http://localhost:5000${user.avatar}`
              : "/uploads/default.png"
          }
          alt="avatar"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p className="role">Role: {user.role}</p>
          <div style={{ marginTop: 12 }}>
            <button className="btn-edit" onClick={() => navigate("/profile")}>
              Open Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getAdminStats();
        setStats(res.data.stats);
      } catch (error) {
        console.error("Failed to load stats", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard 👑</h1>
        <p>One place to manage recipes, users, and analytics</p>
      </div>

      <div className="dashboard-tabs">
        <button
          className={activeTab === "overview" ? "tab active" : "tab"}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "recipes" ? "tab active" : "tab"}
          onClick={() => setActiveTab("recipes")}
        >
          Recipes
        </button>
        <button
          className={activeTab === "analytics" ? "tab active" : "tab"}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
        <button
          className={activeTab === "users" ? "tab active" : "tab"}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
        <button
          className={activeTab === "profile" ? "tab active" : "tab"}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === "overview" && (
          <div className="overview">
            {loading ? (
              <p>Loading overview...</p>
            ) : stats ? (
              <div className="stats-grid">
                <div className="stat-card">
                  <h2>{stats.totalUsers}</h2>
                  <p>Total Users</p>
                </div>

                <div className="stat-card">
                  <h2>{stats.admins}</h2>
                  <p>Admins</p>
                </div>

                <div className="stat-card">
                  <h2>{stats.users}</h2>
                  <p>Normal Users</p>
                </div>
              </div>
            ) : (
              <p>No stats available</p>
            )}
          </div>
        )}

        {activeTab === "recipes" && (
          <div className="tab-recipes">
            <AdminRecipes />
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="tab-analytics">
            <AdminAnalytics />
          </div>
        )}

        {activeTab === "users" && (
          <div className="tab-users">
            <UsersTable />
          </div>
        )}
        {activeTab === "profile" && (
          <div className="tab-profile">
            <ProfilePanel />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
