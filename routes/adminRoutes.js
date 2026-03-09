const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/admin", adminController.getDashboard);

router.get("/admin/add-product", adminController.getAddProduct);

router.post("/admin/add-product", adminController.postAddProduct);

router.get("/admin/edit-product/:id", adminController.getEditProduct);

router.post("/admin/update-product/:id", adminController.postUpdateProduct);

router.post("/admin/delete-product/:id", adminController.deleteProduct);

module.exports = router;