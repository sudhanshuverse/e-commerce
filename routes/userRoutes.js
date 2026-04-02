const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// 🔹 GET routes (render pages)
router.get("/signin", userController.getSigninPage);
router.get("/signup", userController.getSignupPage);

// 🔹 POST routes (form submission)
router.post("/signup", userController.addUser);
router.post("/signin", userController.signinUser); // ✅ THIS WAS MISSING

module.exports = router;