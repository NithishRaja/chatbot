var mongo  = require("mongodb");
var mongoClient = mongo.MongoClient;
var setDefaults = require("./setDefaults");

module.exports = {
  connect: function(){
    if(mongo.DB){
      return;
    }
    // connection to mongo database
    mongoClient.connect("mongodb://chatbot-admin:chatbot-password@chatbot-database-shard-00-00-t8uci.mongodb.net:27017,chatbot-database-shard-00-01-t8uci.mongodb.net:27017,chatbot-database-shard-00-02-t8uci.mongodb.net:27017/test?ssl=true&replicaSet=chatbot-database-shard-0&authSource=admin", function(err, db){
      if(err!==null){
        throw err;
      }
      console.log("connected succesfully");
      // storing database instance in mongo singleton
      mongo.DB = db;
      // setting default values in database
      setDefaults(mongo);
    });
  }
}
