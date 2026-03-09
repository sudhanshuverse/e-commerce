const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const MONGO_URL = "mongodb://sudhanshu1:coding12345@ac-ixqd2yz-shard-00-00.8bpirzw.mongodb.net:27017,ac-ixqd2yz-shard-00-01.8bpirzw.mongodb.net:27017,ac-ixqd2yz-shard-00-02.8bpirzw.mongodb.net:27017/?ssl=true&replicaSet=atlas-s0hxc6-shard-0&authSource=admin&appName=FirstCluster";

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then(client => {
      console.log("MongoDB Atlas Connected");
      _db = client.db("ecommerce");   // database name
      callback();
    })
    .catch(err => {
      console.log("MongoDB connection failed:", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("Database not connected!");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;