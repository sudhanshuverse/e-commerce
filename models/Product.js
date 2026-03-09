const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name: String,

    category: String,

    price: Number,

    image: String,

    rating: Number,

    reviews: Number

});

module.exports = mongoose.model("Product", productSchema);