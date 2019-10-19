var http = require("http");
var fs = require("fs");
var extract = require("./extract");
var mime = require("mime/lite");
var wss = require("./websockets-server");

// satisfy linter
wss;

var handleError = function(err, res) {
  res.writeHead(404);
  fs.readFile("app/error.html", function(err, data) {
    res.end(data);
  });
  // res.end();
};
//console.log(handleError);

var server = http.createServer(function(req, res) {
  //console.log("Responding to a request.");

  var filePath = extract(req.url);
  fs.readFile(filePath, function(err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
      var mimeType = mime.getType(filePath);
      //console.log("Mime type is: " + mimeType);
      res.setHeader("Content-Type", mimeType);
      res.end(data);
    }
  });

});
server.listen(3000);
