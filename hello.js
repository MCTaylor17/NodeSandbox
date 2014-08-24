var http = require('http'); //add the http mod

var myServer = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"})
	response.write("<h1>Hello<small>World<small><h1>");
	response.end();

});; // .createServer


myServer.listen(3000);

console.log("Go to http://localhost:3000 in your browser");