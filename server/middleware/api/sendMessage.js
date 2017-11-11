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

  // save user input in conversation stack
  updateConversationStack(req.session.conversationStack, {"source": "user", "text": req.body.text});

  // initialize conversation object
  const conversation = new ConversationV1({
    username: process.env.IBM_WATSON_USERNAME,
    password: process.env.IBM_WATSON_PASSWORD,
    version_date: ConversationV1.VERSION_DATE_2016_09_20
  });

  // send message with context so that conversation can be continued
  conversation.message({
    input:{
      text: req.body.text
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
        // update session with most recent context
        req.session.conversationContext = _.clone(response.context);
      });
      var card = null;
      if(response.context.park){
        if(response.output.cardType==="animals"){
          // get animals matching the park from database
          var faunaCollection = mongo.DB.collection("fauna");
          faunaCollection.find({ park: response.context.park }, {}).toArray(function(error, result){
            if(error){
              throw error;
            }else{
              // update card with animal info
              updateCard(result, card, function(result){
                card = result;
              });
            }
            // update conversation stack
            response.output.text.forEach(function(text){
              updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": text});
            });
            updateConversationStack(req.session.conversationStack, {"source": "chatbot", cardType: response.output.cardType, cardList: card}, function(){
              res.status(200).json(req.session.conversationStack);
            });
          });
        }else if(response.output.cardType==="plants"){
          // get plants matching the park from database
          var floraCollection = mongo.DB.collection("flora");
          floraCollection.find({ park: response.context.park }, {}).toArray(function(error, result){
            if(error){
              throw error;
            }else{
              // update card with plant info
              updateCard(result, card, function(result){
                card = result;
              });
            }
            // update conversation stack
            response.output.text.forEach(function(text){
              updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": text});
            });
            updateConversationStack(req.session.conversationStack, {"source": "chatbot", cardType: response.output.cardType, cardList: card}, function(){
              res.status(200).json(req.session.conversationStack);
            });
          });
        }else if(response.output.cardType==="park"){
          // get park info from database
          var nationalParksCollection = mongo.DB.collection("national_parks");
          nationalParksCollection.find({ name: response.context.park }, {}).toArray(function(error, result){
            if(error){
              throw error;
            }else{
              // update card with park info
              updateCard(result, card, function(result){
                card = result;
              });
            }
            // update conversation stack
            response.output.text.forEach(function(text){
              updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": text});
            });
            updateConversationStack(req.session.conversationStack, {"source": "chatbot", cardType: response.output.cardType, cardList: card}, function(){
              res.status(200).json(req.session.conversationStack);
            });
          });
        }else{
          // update conversation stack with normal chatbot response
          response.output.text.forEach(function(text){
            updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": text});
          });
          res.status(200).json(req.session.conversationStack);
        }
      }else{
        // update conversation stack with chatbot response
        response.output.text.forEach(function(text){
          updateConversationStack(req.session.conversationStack, {"source": "chatbot", "text": text});
        });
        res.status(200).json(req.session.conversationStack);
      }
    }
  });
};
