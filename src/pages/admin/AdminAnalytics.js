import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

export default function AdminAnalytics() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admin/stats`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStats(res.data.stats);
    };

    fetchStats();
  }, []);

  if (!stats) return <p>Loading analytics...</p>;

  const data = [
    { name: "Total Users", value: stats.totalUsers },
    { name: "Admins", value: stats.admins },
    { name: "Users", value: stats.users },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>📊 Admin Analytics</h2>

      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
