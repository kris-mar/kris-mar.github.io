$(function() {

  $('.icon-skills').addClass('hover');
 
  window.setTimeout(function() {
    $('.icon-skills').removeClass('hover');
  }, 600);
  
  $('.hover-pencil').hover(function(){
    $('.ti-ruler-pencil').addClass('hover');
  }, function(){
    $('.ti-ruler-pencil').removeClass('hover');
  });

  $('.hover-desktop').hover(function(){
    $('.ti-desktop').addClass('hover');
  }, function(){
    $('.ti-desktop').removeClass('hover');
  });

  $('.hover-vector').hover(function(){
    $('.ti-vector').addClass('hover');
  }, function(){
    $('.ti-vector').removeClass('hover');
  });

  $('.hover-palette').hover(function(){
    $('.ti-palette').addClass('hover');
  }, function(){
    $('.ti-palette').removeClass('hover');
  });

});