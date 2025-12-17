import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import avatar from "../assets/images/default-avatar.png";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
        setName(res.data.user.name);
      } catch (error) {
        console.error("Failed to fetch profile");
      }
    };

    fetchProfile();
  }, [token]);

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/profile",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data.user);
      setEditing(false);
      alert("Profile updated");
    } catch (error) {
      alert("Update failed");
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img src={avatar} alt="Avatar" className="profile-avatar" />
          <h2>{user.name}</h2>
          <span className={`role-badge ${user.role}`}>{user.role}</span>
        </div>

        <div className="profile-section">
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          {editing ? (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button onClick={handleUpdate}>Save</button>
            </>
          ) : (
            <button onClick={() => setEditing(true)}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
}
