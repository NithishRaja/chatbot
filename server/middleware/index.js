var path = require("path");
var apiMiddleware = require("./api");
var renderHome = require("./renderHome");

module.exports = {
  api: apiMiddleware,
  renderHome: renderHome
};
