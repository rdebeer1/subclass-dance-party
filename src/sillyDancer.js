var SillyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 10;
  this.step();
  this.$node.addClass('sillyDancer');
};
SillyDancer.prototype = Object.create(Dancer.prototype);
SillyDancer.prototype.constructor = SillyDancer;

SillyDancer.prototype.step = function() {
  this.t += 0.05;
  var newLeft = Math.floor(Math.random() * $( window ).width());
  var newTop = Math.floor(Math.random() * $( window ).height());
  this.$node.animate({
    top: newTop,
    left: newLeft,
  }, 1000);
  Dancer.prototype.step.call(this);
};
