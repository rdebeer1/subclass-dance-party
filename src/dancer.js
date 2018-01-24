// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};
Dancer.prototype.step = function() {
  if (!this.$node.hasClass('stop')) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};


Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  if (this.$node.hasClass('stop')) {
    this.$node.animate({
      top: 500
    });
  } else {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};
