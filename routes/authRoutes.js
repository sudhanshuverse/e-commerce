const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// GET PAGES
router.get("/signup", (req, res) => {
  res.render("pages/signup");
});

router.get("/signin", (req, res) => {
  res.render("pages/signin");
});

// POST ACTIONS
router.post("/signup", userController.postSignup);
router.post("/signin", userController.postSignin);

module.exports = router;