// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  
};
Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(left) {
  if (this.$node.hasClass('stop')) {
    this.$node.animate({
      top: $(window).height() / 2,
      left: left,
    });
  } else {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};
