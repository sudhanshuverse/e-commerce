const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/cart/add/:id", cartController.addToCart);
router.post("/cart/decrease/:id", cartController.decreaseQuantity);
router.delete("/cart/remove/:id", cartController.removeFromCart);
router.get("/cart", cartController.getCart);

module.exports = router;