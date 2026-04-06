const { ObjectId } = require("mongodb");
const getDB = require("../config/mongodb").getDB;


// ADD TO CART
exports.addToCart = async (req, res) => {

    const db = getDB();

    const productId = req.params.id;

    const quantity = parseInt(req.body.quantity) || 1;

    const existingItem = await db.collection("cart").findOne({
        productId: new ObjectId(productId)
    });

    if (existingItem) {

        await db.collection("cart").updateOne(
            { productId: new ObjectId(productId) },
            { $inc: { quantity: quantity } }
        );

    } else {

        await db.collection("cart").insertOne({
            productId: new ObjectId(productId),
            quantity: quantity
        });

    }

    res.redirect("/cart");
};

exports.decreaseQuantity = async (req, res) => {

    const db = getDB();
    const productId = req.params.id;

    const item = await db.collection("cart").findOne({
        productId: new ObjectId(productId)
    });

    if (item.quantity > 1) {

        await db.collection("cart").updateOne(
            { productId: new ObjectId(productId) },
            { $inc: { quantity: -1 } }
        );

    } else {

        await db.collection("cart").deleteOne({
            productId: new ObjectId(productId)
        });

    }

    res.redirect("/cart");

};

exports.removeFromCart = async (req, res) => {

    const db = getDB();
    const productId = req.params.id;

    await db.collection("cart").deleteOne({
        productId: new ObjectId(productId)
    });

    res.json({ success: true });

};


// SHOW CART
exports.getCart = async (req, res) => {

    const db = getDB();

    const cartProducts = await db.collection("cart").aggregate([
        {
            $lookup: {
                from: "products",
                localField: "productId",
                foreignField: "_id",
                as: "product"
            }
        },
        {
            $unwind: "$product"
        }
    ]).toArray();

    res.render("pages/cart", {
        cartProducts
    });

};