$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
   
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      $( window ).height() * Math.random(),
      $( window ).width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    
  });

});

