const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb://127.0.0.1:27017";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then(client => {
      console.log("✅ MongoDB Connected");

      _db = client.db("ecommerce"); // database name
      callback();
    })
    .catch(err => {
      console.log("❌ Connection failed:", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("Database not connected!");
  }
  return _db;
};

module.exports = {
  mongoConnect,
  getDB   // ✅ VERY IMPORTANT
};