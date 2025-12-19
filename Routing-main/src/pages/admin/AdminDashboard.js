import React, { useEffect, useState } from "react";
import { getAdminStats } from "../../api/adminApi";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getAdminStats();
        setStats(res.data.stats);
      } catch (error) {
        console.error("Failed to load stats", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard 👑</h1>
      <p>System overview & analytics</p>

      {!stats ? (
        <p>Loading analytics...</p>
      ) : (
        <div className="stats-grid">
          <div className="stat-card">
            <h2>{stats.totalUsers}</h2>
            <p>Total Users</p>
          </div>

          <div className="stat-card">
            <h2>{stats.totalAdmins}</h2>
            <p>Admins</p>
          </div>

          <div className="stat-card">
            <h2>{stats.totalNormalUsers}</h2>
            <p>Normal Users</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
