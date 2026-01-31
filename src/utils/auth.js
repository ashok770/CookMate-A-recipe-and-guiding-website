export const getToken = () => {
  return localStorage.getItem("token");
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const isAdmin = () => {
  return getRole() === "admin";
};
