var http = require("http");

http.createServer(function(request, response) {
  console.log("created server");
}).listen(3000);
