const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const bookingCleanup = require("./tasks/bookingCleanup"); // Import the booking cleanup task

// Connect to the database
connectDb();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware for rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // 100 requests per IP
});
app.use(limiter);

// Parse request bodies as JSON
app.use(express.json());

// Sanitize user-supplied data against NoSQL injection attacks
app.use(mongoSanitize());

// Sanitize user input against XSS attacks
app.use(xss());

// Set security-related HTTP headers
app.use(helmet());

// Prevent HTTP Parameter Pollution attacks
app.use(hpp());

// Routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/dishes", require("./routes/dishRoutes"));
app.use("/api/lunchDishes", require("./routes/lunchDishRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log("Server running on port " + port);
});
