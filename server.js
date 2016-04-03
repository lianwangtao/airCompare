var http = require("http");

var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "app/index.html";
  } else {
    filePath = "app" + request.url;
  }

  var absPath = "./" + filePath;
  this.serverWorking(response, absPath);
});
var port_number = server.listen(process.env.PORT || 3000);
