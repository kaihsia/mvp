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
        newTweet['id_str'] = tweet.id_str;
        newTweet['user_name'] = tweet.user.screen_name;
        newTweet['created_at'] = tweet.created_at;
        tweetArr.push(newTweet);
      }
    });
    cb(tweetArr);
  });
};

var getInfo = function(cb) {
  client.get('statuses/user_timeline',
  {screen_name: 'realDonaldTrump', count: 1},
  function(err, tweets, resp) {
    // console.log('working!');
    var info = {};
    info['profile_image_url'] = tweets[0].user.profile_image_url;
    info['user_name'] = tweets[0].user.screen_name;
    cb(info);
  });
};

module.exports.filter = filter;
module.exports.getInfo = getInfo;
