$(document).ready(function() {
  window.dancers = [];
  var baseUrl = 'wow/wow';
  var wowCounter = 0;

  $('.addDancerButton').on('click', function(event) {
    if (wowCounter > 17) {
      wowCounter = 0;
    }
    new Audio(baseUrl + wowCounter + '.wav').play();

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
    
      $( window ).height() * Math.random(),
      $( window ).width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    wowCounter++;
  });

  $('.lineUp').on('click', function(event) {
    if (wowCounter > 17) {
      wowCounter = 0;
    }
    new Audio(baseUrl + wowCounter + '.wav').play();
    var left = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.toggleClass('stop');
      window.dancers[i].lineUp(left);
      left += 100;
    }
    wowCounter++;
  });

});

