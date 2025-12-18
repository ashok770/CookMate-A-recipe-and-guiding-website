import React from "react";
import UsersTable from "./UsersTable";
import "./Admin.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard 👑</h1>
      <p>Manage users and system data</p>

      <UsersTable />
    </div>
  );
}
