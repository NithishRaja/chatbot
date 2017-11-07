var conversation = require("watson-developer-cloud/conversation/v1");

module.exports = function(req, res){
  res.status(200).json([
    {
      source: "chatbot",
      text: "hello"
    },
    {
      source: "user",
      text: "hi"
    }
  ]);
};
