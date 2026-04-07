const express = require("express");
const path = require("path");

const app = express();

// VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// DATABASE CONNECTION
const { mongoConnect } = require("./config/mongodb");

// ROUTES
const homeRoutes = require("./routes/homeRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");

// USING ROUTES
app.use(homeRoutes);
app.use(productRoutes);
app.use(cartRoutes);
app.use(adminRoutes);
app.use(authRoutes);

// 404 HANDLER (optional but good practice)
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// START SERVER ONLY AFTER DB CONNECTS
mongoConnect(() => {
  app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
  });
});