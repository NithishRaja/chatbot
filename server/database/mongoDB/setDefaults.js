var nationalParks = require("./../../../info/nationalParks.json");
var fauna = require("./../../../info/fauna.json");
var flora = require("./../../../info/flora.json");

module.exports = function(mongo){
  var nationalParksCollection = mongo.DB.collection("national_parks");
  var faunaCollection = mongo.DB.collection("fauna");
  var floraCollection = mongo.DB.collection("flora");

  var options = {
    upsert: true,
    returnOriginal: false
  };

  nationalParks.forEach(function(park){
    var newDocument = {
      $setOnInsert: park
    };
    nationalParksCollection.findOneAndUpdate({ "name": park.name }, newDocument, options, function(err, res){
      if(err){
        console.log(err);
      }
    });
  });

  fauna.forEach(function(animal){
    var newDocument = {
      $setOnInsert: animal
    };
    faunaCollection.findOneAndUpdate({ "name": animal.name }, newDocument, options, function(err, res){
      if(err){
        console.log(err);
      }
    });
  });

  flora.forEach(function(plant){
    var newDocument = {
      $setOnInsert: plant
    };
    floraCollection.findOneAndUpdate({ "name": plant.name }, newDocument, options, function(err, res){
      if(err){
        console.log(err);
      }
    });
  });

}
