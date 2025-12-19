import axios from "axios";

export default function AvatarUpload({ setUser }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    const token = localStorage.getItem("token");

    const res = await axios.put(
      "http://localhost:5000/api/users/profile/avatar",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // 🔁 Refresh profile after upload
    const profileRes = await axios.get(
      "http://localhost:5000/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setUser(profileRes.data.user);
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
}
