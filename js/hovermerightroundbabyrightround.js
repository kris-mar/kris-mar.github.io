$(function() {
  $('#hovernator').hover(function() {  
   $('#icon-skills').css('color', '#5698d4');
   $('#icon-skills').css( 'transition', 'color 0.6s ease-in-out');
  }, function() {
    // on mouseout, reset the background colour
    $('#icon-skills').css('color', '#999');
  });
    $('#hovernator2').hover(function() {  
   $('#icon-skills').css('color', '#5698d4');
   $('#icon-skills').css( 'transition', 'color 0.4s ease-in-out');
  }, function() {
    // on mouseout, reset the background colour
    $('#icon-skills').css('color', '#999');
  });
});