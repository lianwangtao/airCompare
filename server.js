var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");


var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "app/index.html";
  } else {
    filePath = "app" + request.url;
  }

  var absPath = "./" + filePath;
  serverWorking(response, absPath);
});
var port_number = server.listen(process.env.PORT || 3000);
