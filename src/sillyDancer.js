var makeSillyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 10;
  this.step();
};
makeSillyDancer.prototype = Object.create(makeDancer.prototype);
makeSillyDancer.prototype.constructor = makeSillyDancer;

makeSillyDancer.prototype.step = function() {
  this.t += 0.05;

  var newLeft = Math.floor(Math.random() * 1000);
  var newTop = Math.floor(Math.random() * 1000);

  this.$node.animate({
    top: newTop,
    left: newLeft,
  }, 1000);
  makeDancer.prototype.step.call(this);
};
