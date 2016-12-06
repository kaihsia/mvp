var Twitter = require('twitter');
var _ = require('lodash');
var env = require('./config/config');

var client = new Twitter({
  consumer_key: env.consumer_key,
  consumer_secret: env.consumer_secret,
  access_token_key: env.access_token_key,
  access_token_secret: env.access_token_secret
});

var filter = function(query, cb) {
  client.get('statuses/user_timeline',
  {screen_name: 'realDonaldTrump', count: 50},
  function(err, tweets, resp) {
    // console.log('working!');
    var tweetArr = [];
    if (err) {
      console.log(err);
      return;
    }
    // console.log(tweets);
    _.each(tweets, function(tweet) {
      var buf = Buffer.from(tweet.text);
      if (buf.indexOf(query) > -1) {
        var newTweet = {};
        newTweet['text'] = tweet.text;
        tweetArr.push(newTweet);
      }
    });
    cb(tweetArr);
  });
};

module.exports = filter;
