var getTweets = (endpoint, cb) => {
  $.get(endpoint)
    .done(function(data) {
      cb(data);
    })
    .fail(function(err) {
      console.log('error', err);
    });
}

var postSearch = (endpoint, data, cb) => {
  $.ajax({
    type: "POST",
    url: endpoint,
    data: data
  }).done(function(data) {
    cb(data);
  }).fail(function(err) {
    console.log('error', err);
  });
};


window.getTweets = getTweets;
window.postSearch = postSearch;
