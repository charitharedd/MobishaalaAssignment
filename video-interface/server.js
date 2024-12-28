const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const roomRoutes = require("./routes/roomRoutes");
const { PORT, DB_URI } = require("./config");

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Database connection error:", error));

// Routes
app.use("/api", roomRoutes);

// Start Server
app.listen(PORT, () => console.log(Server running on port ${PORT}));
