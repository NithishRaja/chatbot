var ConversationV1 = require("watson-developer-cloud/conversation/v1");
var mongo = require("mongodb");
var _ = require("underscore");

module.exports = function(req, res){

  var conversation = new ConversationV1({
    username: process.env.IBM_WATSON_USERNAME,
    password: process.env.IBM_WATSON_PASSWORD,
    version_date: ConversationV1.VERSION_DATE_2016_09_20
  });

  conversation.message({
    input: {
      text: ""
    },
    workspace_id: process.env.IBM_WATSON_WORKSPACE_ID
  }, function(error, response){
    if(error){
      res.status(500).json(error);
    }else{
      var parks = [];
      var parksCollection = mongo.DB.collection("national_parks");
      parksCollection.find({}, { "_id": false, "name": true }).toArray(function(err, result){
        result.map(function(park){
          parks.push(park.name);
        });
        response.context.parks = parks;
        req.session.conversationContext = _.clone(response.context);
        console.log(JSON.stringify(response, null, 2));
        req.session.conversationStack = [{"source": "chatbot", "text": response.output.text}];
        res.status(200).json(req.session.conversationStack);
      });
    }
  });
};
