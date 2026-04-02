const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const mongoConnect = require("./config/mongodb").mongoConnect;

const homeRoutes = require("./routes/homeRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRouter = require('./routes/userRoutes');



app.use(homeRoutes);
app.use(productRoutes);
app.use(cartRoutes);
app.use(adminRoutes);
app.use(userRouter);

mongoConnect(() => {
  app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
  });
});