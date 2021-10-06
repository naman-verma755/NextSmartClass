const {MongoClient} = require("mongodb");

const url = "mongodb+srv://namanverma:namanverma@zero.za8kh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

const client = new MongoClient(url);
 client.connect();


module.exports = {client};
