const getDB = require("../config/mongodb").getDB;

exports.getHomePage = async (req, res) => {

  const db = getDB();

  const beautyProducts = await db
    .collection("products")
    .find({ category: "Beauty" })
    .limit(5)
    .toArray();

  const fashionProducts = await db
    .collection("products")
    .find({ category: "Fashion" })
    .limit(5)
    .toArray();

  res.render("pages/home", {
    beautyProducts,
    fashionProducts
  });
};

exports.getAboutPage = (req, res) => {
  res.render("pages/about");
};

exports.getContactPage = (req, res) => {
  res.render("pages/contact");
};

exports.getSigninPage = (req, res) => {
  res.render("pages/signin");
};

exports.getSignupPage = (req, res) => {
  res.render("pages/signup");
};

exports.getFavouritePage = (req, res) => {
  res.render("pages/favourite");
};

