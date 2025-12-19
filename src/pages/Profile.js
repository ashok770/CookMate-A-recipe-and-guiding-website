import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import AvatarUpload from "../components/AvatarUpload";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);
    };

    fetchProfile();
  }, []);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src={
            user.avatar
              ? `http://localhost:5000${user.avatar}`
              : "/default-avatar.png"
          }
          alt="avatar"
          className="profile-avatar"
        />

        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>Role: {user.role}</p>

        <AvatarUpload setUser={setUser} />
      </div>
    </div>
  );
}
