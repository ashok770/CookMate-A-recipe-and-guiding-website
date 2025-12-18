import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/adminApi";
import "./Admin.css";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data.users);
    } catch (error) {
      alert("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="users-table">
      <h2>All Users</h2>

      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <img
                  src={`http://localhost:5000${
                    user.avatar || "/uploads/default.png"
                  }`}
                  alt="avatar"
                  className="avatar"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className={`role ${user.role}`}>{user.role}</span>
              </td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
