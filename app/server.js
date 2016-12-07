var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var twitter = require('./twitter');
var mongoose = require('mongoose');
var db = require('./db/db');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../dist')));

// CONNECT TO DB
mongoose.connect('mongodb://localhost/mvp');

// GET INFO
app.get('/info', function(req, res) {
  twitter.getInfo(function(info) {
    res.send(info);
  });
});

// SEARCH QUERY
app.post('/search', function(req, res) {
  // console.log('something posted', req.body);
  var find = req.body.query;
    db.find({text: {$regex: find, $options: 'g'}}, function(err, data) {
      if (data.length !== 0) {
        console.log('db!');
        res.send(data);
      } else {
        twitter.filter(find, function(arr) {
          console.log('api!');
          db.collection.insert(arr, function(err, docs) {
            if (err) {
               console.log(err);
               return;
            } else {
               console.log('potatoes were successfully stored.', docs.length);
            }
          });
          res.send(arr);
        });
      }
    });
    // res.send(arr);
});

app.listen(4000);
console.log('Server started!');
