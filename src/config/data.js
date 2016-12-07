var getInfo = (endpoint, cb) => {
  $.get(endpoint)
    .done(function(data) {
      // console.log(data);
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


window.getInfo = getInfo;
window.postSearch = postSearch;
