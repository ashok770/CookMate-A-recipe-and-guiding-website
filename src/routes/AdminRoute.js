import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Not logged in
  if (!token || !user) {
    return <Navigate to="/login" />;
  }

  // Logged in but NOT admin
  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  // Admin allowed
  return children;
};

export default AdminRoute;
