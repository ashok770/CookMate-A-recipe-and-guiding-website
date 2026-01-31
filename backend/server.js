const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);

app.use("/uploads", express.static("uploads"));
app.use("/api/admin", adminRoutes);
// app.use("/api/admin", require("./routes/adminRoutes"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
