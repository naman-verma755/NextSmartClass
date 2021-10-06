const {MongoClient} = require("mongodb");

const url = "";

const client = new MongoClient(url);
 client.connect();


module.exports = {client};
