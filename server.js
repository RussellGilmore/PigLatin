var express = require('express');
var port = 4000;
const path = require('path');
var favicon = require('serve-favicon');

var app = express();
var server = app.listen(port, function() {
  console.log('Requests on port ' + port);
});

// Static files
app.use(express.static(path.join(__dirname, '/public')));
app.use(favicon(__dirname + '/public/img/pig.ico'));