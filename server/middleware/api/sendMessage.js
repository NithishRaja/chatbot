var ConversationV1 = require("watson-developer-cloud/conversation/v1");

module.exports = function(req, res){

  var conversation = new ConversationV1({
    username: process.env.IBM_WATSON_USERNAME,
    password: process.env.IBM_WATSON_PASSWORD,
    version_date: ConversationV1.VERSION_DATE_2016_09_20
  });

  console.log("context");
  console.log(req.session.conversationContext);

  conversation.message({
    input:{
      text: "give me a list of parks"
    },
    workspace_id: process.env.IBM_WATSON_WORKSPACE_ID,
    context: req.session.conversationContext
  }, function(error, response){
    if(error){
      console.log(error);
      res.status(200).json(error);
    }else{
      console.log("response");
      console.log(response);
      req.session.conversationStack.push({"source": "chatbot", "text": response.output.text});
      req.session.conversationContext = response.context;
      console.log(req.session);
      res.status(200).json(response);
    }
  });
};
