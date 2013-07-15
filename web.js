var express = require('express');
var fs = required('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var hello = new Buffer(fs.readFileSync('index.html'));
  response.send(hello.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
