var ConversationV1 = require("watson-developer-cloud/conversation/v1");
var mongo = require("mongodb");
var _ = require("underscore");

const updateCard = function(req, res, callback){
  req.forEach(function(arrayElement, index){
    if(index===0){
      res = [_.clone(arrayElement)];
    }else{
      res.push(_.clone(arrayElement));
    }
  });
  callback(res);
};

const updateConversationStack = function(stack, object, callback){
  stack.push(object);
  if(callback){
    callback();
  }
};

module.exports = function(req, res, next){

  const userMessage = "tell me about animals in sariska";

  updateConversationStack(req.session.conversationStack, {"source": "user", "text": userMessage});

  const conversation = new ConversationV1({
    username: process.env.IBM_WATSON_USERNAME,
    password: process.env.IBM_WATSON_PASSWORD,
    version_date: ConversationV1.VERSION_DATE_2016_09_20
  });

  console.log("context");
  console.log(req.session.conversationContext);

  conversation.message({
    input:{
      text: userMessage
    },
    workspace_id: process.env.IBM_WATSON_WORKSPACE_ID,
    context: req.session.conversationContext
  }, function(error, response){
    if(error){
      res.status(500).json(error);
    }else{
      response.entities.forEach(function(ent){
        if(ent.entity==="NationalParks"){
          response.context.park = ent.value;
        }
        req.session.conversationContext = _.clone(response.context);
      });
      var card = null;
      if(response.context.park){
        if(response.output.cardType==="animals"){
          console.log("animals");
          var faunaCollection = mongo.DB.collection("fauna");
          faunaCollection.find({ park: response.context.park }, {}).toArray(function(error, result){
            if(error){
              throw error;
            }else{
              updateCard(result, card, function(result){
                card = result;
              });
            }
            updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": response.output.text, cardType: response.output.cardType, cardList: card}, function(){
              res.status(200).json(req.session.conversationStack);
            });
          });
        }else if(response.output.cardType==="plants"){
          console.log("plants");
          var floraCollection = mongo.DB.collection("flora");
          floraCollection.find({ park: response.context.park }, {}).toArray(function(error, result){
            if(error){
              throw error;
            }else{
              updateCard(result, card, function(result){
                card = result;
              });
            }
            updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": response.output.text, cardType: response.output.cardType, cardList: card}, function(){
              res.status(200).json(req.session.conversationStack);
            });
          });
        }else if(response.output.cardType==="park"){
          console.log("park");
          var nationalParksCollection = mongo.DB.collection("national_parks");
          nationalParksCollection.find({ name: response.context.park }, {}).toArray(function(error, result){
            if(error){
              throw error;
            }else{
              updateCard(result, card, function(result){
                card = result;
              });
            }
            console.log(JSON.stringify(response, null, 2));
            updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": response.output.text, cardType: response.output.cardType, cardList: card}, function(){
              res.status(200).json(req.session.conversationStack);
            });
          });
        }else{
          console.log(JSON.stringify(response, null, 2));
          updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": response.output.text}, function(){
            res.status(200).json(req.session.conversationStack);
          });
        }
      }else{
        console.log(JSON.stringify(response, null, 2));
        updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": response.output.text}, function(){
          res.status(200).json(req.session.conversationStack);
        });
      }
    }
  });
};
