var path = require("path");
var extractFilePath = function(url) {
  var filePath;
  var fileName = "index.html";

  if (url.length > 1) {
    fileName = url.substring(1);
  }

  //console.log("The fileName is: " + fileName);
  var __dirname = path.resolve(path.dirname(""));
  filePath = path.resolve(__dirname, "app", fileName);

  return filePath;
};

// node function global requrie
module.exports = extractFilePath;

//console.log(extractFilePath);
