const { ObjectId } = require("mongodb");
const getDB = require("../config/mongodb").getDB;



exports.getDashboard = async (req, res) => {
    const db = getDB();
    const products = await db.collection("products").find().toArray();
    // group products by category
    const categories = {};
    products.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    // total products
    const totalProducts = products.length;

    // total categories
    const totalCategories = Object.keys(categories).length;

    res.render("admin/dashboard", {
        categories,
        totalProducts,
        totalCategories
    });

};



exports.getAddProduct = (req, res) => {
    res.render("admin/add-product");
};



exports.postAddProduct = async (req, res) => {
    const db = getDB();
    const product = {
        name: req.body.name,
        price: parseFloat(req.body.price),
        img: req.body.img,
        category: req.body.category,
        description: req.body.description,
        rating: 4,
        reviews: 0
    };

    await db.collection("products").insertOne(product);
    res.redirect("/admin");
};



exports.getEditProduct = async (req, res) => {
    const db = getDB();
    const product = await db.collection("products").findOne({
        _id: new ObjectId(req.params.id)
    });
    res.render("admin/edit-product", { product });
};



exports.postUpdateProduct = async (req, res) => {
    const db = getDB();
    await db.collection("products").updateOne(
        { _id: new ObjectId(req.params.id) },
        {
            $set: {
                name: req.body.name,
                price: parseFloat(req.body.price),
                img: req.body.img,
                category: req.body.category,
                description: req.body.description
            }
        }
    );
    res.redirect("/admin");
};



exports.deleteProduct = async (req, res) => {
    const db = getDB();
    await db.collection("products").deleteOne({
        _id: new ObjectId(req.params.id)
    });
    res.redirect("/admin");
};