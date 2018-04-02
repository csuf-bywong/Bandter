// this will be based on checklist.js from coffeerun project
// Carousel gets exported to App namespace
// addImage method to create a carousel item/images
// Image constructor will be in charge of creating all the DOM elements
(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function Carousel(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$element = $(selector);
    if (this.element.length == 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  Carousel.prototype.addImage = function(carouselImage) {
    // create a new instance of a carouselImage by calling Image constructor?
    // and passing it the carouselImage object
    // assign the new instance to the variable newImage
    // then append newImage $element property to Carousel instance's $element property
    var newImage = new Image(carouselImage);
    this.$element.append(newImage.$element);
  };

  function Image(carouselImage) { //uses jQuery to build the DOM elements
    // declare variables that make up a carousel item, which is only the image url?
    // then constructor will append them together into a subtree of DOM elements
    // Carousel takes the subtree and appends it to page's DOM tree as a child of [class="carousel-item"]
    /*
    var $div = $("<div></div>", {
      "class": "carousel-item"
    });
    var $label = $("<label></label>");
    var $item = $("<img />", {
      type: "carousel-item",
      value: shows.imageURL
    });
    $label.append($item);
    $div.append(label);

    this.$element = $div;
    */
    $("carousel-item").prepend($("<img id=\"the img\" src =\"img/featured3.jpg"));
  }

  App.Carousel = Carousel;
  window.App = App;
})(window);
