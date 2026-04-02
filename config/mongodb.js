const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://sudhanshu1:coding12345@firstcluster.8bpirzw.mongodb.net/ecommerce";

const mongoConnect = async (callback) => {
  try {
    await mongoose.connect(MONGO_URL);

    console.log("MongoDB Atlas Connected");

    callback();
  } catch (err) {
    console.log("MongoDB connection failed:", err);
  }
};

exports.mongoConnect = mongoConnect;