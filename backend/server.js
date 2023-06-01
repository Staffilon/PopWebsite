const express = require("express");

const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

//connects to database
connectDb();

const app = express();

const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

//middleware that provides a parser that
//will parse the data from the client to the server side
app.use(express.json());

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/allergens", require("./routes/allergenRoutes"));
app.use("/api/ingredients", require("./routes/ingredientRoutes"));
app.use("/api/dishes", require("./routes/dishRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log("Server running on the port " + port);
});
