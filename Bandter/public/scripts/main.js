(function(window) {
  "use strict";
  var CAROUSEL_SELECTOR = "[class=\"carousel-item\"]";
  var SERVER_URL = "http://localhost:2403/shows";
  var $ = window.jQuery;
  var App = window.App || {};
  var RemoteDataStore = App.RemoteDataStore;
  var Carousel = App.Carousel;

  $.get(SERVER_URL, function(serverResponse) {
    console.log(serverResponse);

  });

})(window);
