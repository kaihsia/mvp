var mongoose = require('mongoose');

var TweetSchema = new mongoose.Schema({
  text: String
});

module.exports = mongoose.model('Tweet', TweetSchema);
