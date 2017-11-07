var mongo  = require("mongodb");
var mongoClient = mongo.MongoClient;
var setDefaults = require("./setDefaults");

module.exports = {
  connect: function(){
    if(mongo.DB){
      return;
    }
    // connection to mongo database
    mongoClient.connect("mongodb://localhost:27017/CHATBOT_DATABASE", function(err, db){
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
