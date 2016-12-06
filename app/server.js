var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var twitter = require('./twitter');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../dist')));

// app.get('/tweets', function(req, res) {
//   twitter('press', function(arr) {
//     res.send(arr);
//   });
// });

app.post('/search', function(req, res) {
  // console.log('something posted', req.body);
  var find = req.body.query;
  twitter(find, function(arr) {
    res.send(arr);
  });
});

app.listen(4000);
console.log('Server started!');
