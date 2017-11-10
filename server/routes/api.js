var middleware = require("./../middleware");

module.exports = function(app){

  app.route("/api/startConversation")
    .get(middleware.api.startConversation);

  app.route("/api/newMessage")
    .post(middleware.api.sendMessage);

  app.route("/api/getConversation")
    .get(middleware.api.getConversation);
}
