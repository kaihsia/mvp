var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../dist')));

app.get('/', function(req, res) {
  console.log("logged!");
  res.end();
});

app.listen(4000);
console.log('Server started!');
