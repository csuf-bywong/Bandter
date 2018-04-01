// this is for dynamically generating the images for the slider
// should get img url from deployd DATABASE
// should add element to DOM?
// going off code from textbook ch13
// constructor accepts arg for a remote server URL which should be the img URL
// throws error if no URL is passed in
// at the end exports RemoteDataStore to App namespace
(function(window) {
  "use strict";
  var App = window.App || {}
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  // no need for add function
  // need a get function
  // get all gets all of the shows
  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl, function(serverResponse) {
      var id;
      for (var i = 0; i < serverResponse.length; i++) {
        if (serverResponse[i].imageURL == key) {
          id = serverResponse[i].id;
        }
      }
      $.get(this.url + "/" + id, function(serverResponse) {
        console.log(serverResponse);
        cb(serverResponse);
      });
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
