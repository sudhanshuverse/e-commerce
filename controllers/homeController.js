const Product = require("../models/Product");

exports.getHomePage = async (req, res) => {
  try {
    const beautyProducts = await Product.find({ category: "Beauty" }).limit(5);

    const fashionProducts = await Product.find({ category: "Fashion" }).limit(5);

    res.render("pages/home", {
      beautyProducts,
      fashionProducts
    });

  } catch (err) {
    console.log(err);
    res.send("Error loading homepage");
  }
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