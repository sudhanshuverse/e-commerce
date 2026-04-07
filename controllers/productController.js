const { ObjectId } = require("mongodb");
const getDB = require("../config/mongodb").getDB;

// Products page
exports.getProducts = async (req, res) => {
    const db = getDB();
    const search = req.query.search || "";
    const category = req.query.category || "All";

    let query = {};
    if (search) {
        query.name = { $regex: search, $options: "i" };
    }
    if (category !== "All") {
        query.category = category;
    }
    const products = await db
        .collection("products")
        .find(query)
        .toArray();

    res.render("pages/products", {
        products,
        search,
        category
    });
};


// Product details page
exports.getProductDetails = async (req, res) => {
    const db = getDB();
    const product = await db
        .collection("products")
        .findOne({ _id: new ObjectId(req.params.id) });
    res.render("pages/productDetails", { product });
};