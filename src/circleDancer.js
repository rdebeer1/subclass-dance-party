var makeCircleDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  makeDancer.apply(this, arguments);
  this.top = top;
  this.left = left;
  this.radius = Math.floor(Math.random() * 100);
  this.t = 0;
  this.timeBetweenSteps = 10;
  this.step();
};
makeCircleDancer.prototype = Object.create(makeDancer.prototype);
makeCircleDancer.prototype.constructor = makeCircleDancer;

makeCircleDancer.prototype.step = function() {
  this.t += 0.05;

  var newLeft = Math.floor(this.top + (this.radius * Math.cos(this.t)));
  var newTop = Math.floor(this.left + (this.radius * Math.sin(this.t)));

  this.$node.animate({
    top: newTop,
    left: newLeft,
  }, 1);
  makeDancer.prototype.step.call(this);
};
