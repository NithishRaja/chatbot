var ConversationV1 = require("watson-developer-cloud/conversation/v1");

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
      req.session.conversationContext = response.context;
      req.session.conversationStack = [{"source": "chatbot", "text": response.output.text}];
      console.log(req.session);
      res.status(200).json(response);
    }
  });
};