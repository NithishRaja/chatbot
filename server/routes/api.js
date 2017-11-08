var middleware = require("./../middleware");

module.exports = function(app){

  app.route("/api/startConversation")
    .get(middleware.api.startConversation);

  app.route("/api/newMessage")
    .get(middleware.api.sendMessage);

}
