var middleware = require("./../middleware");

module.exports = function(app){

  app.route("/api/startConversation")
    .get(function(req, res){
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
    });

  app.route("/api/sendMessage")
    .get(function(req, res){
      res.status(200).json("hello");
    });

}
