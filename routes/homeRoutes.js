const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");


router.get("/", homeController.getHomePage);
router.get("/about", homeController.getAboutPage);
router.get("/contact", homeController.getContactPage);
router.get("/signin", homeController.getSigninPage);
router.get("/signup", homeController.getSignupPage);
router.get("/favourite", homeController.getFavouritePage);


module.exports = router;