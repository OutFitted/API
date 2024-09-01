const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");

require("dotenv").config();

// Import middleware
const corsMiddleware = require("./middleware/cors");
const loggerMiddleware = require("./middleware/logger");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const rateLimiterMiddleware = require("./middleware/rateLimiter");

const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const orderRoutes = require("./routes/orderRoutes");

const sequelize = require("./config/db.config");

const app = express();

// Use middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(corsMiddleware);
app.use(loggerMiddleware);
app.use(rateLimiterMiddleware);

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);

// Health endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Error handling middleware should be last
app.use(errorHandlerMiddleware);

// Test database connection and start server
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
