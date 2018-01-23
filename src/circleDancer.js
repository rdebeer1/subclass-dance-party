var CircleDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  this.radius = Math.floor(Math.random() * 500);
  this.t = 0;
  this.timeBetweenSteps = 10;
  this.step();
  this.$node.addClass('circleDancer');
  
};
CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function() {
  this.t += 0.05;
  var newLeft = Math.floor(this.left + (this.radius * Math.cos(this.t)));
  var newTop = Math.floor(this.top + (this.radius * Math.sin(this.t)));
  this.$node.animate({
    top: newTop,
    left: newLeft,
  }, 1);
  Dancer.prototype.step.call(this);
};
