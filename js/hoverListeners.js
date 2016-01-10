$(function() {

  function addHoverEvent(trigger, target) {
    $(trigger).hover(function(){
      $(target).addClass('hover');
    }, function(){
      $(target).removeClass('hover');
    });
  }
    
  addHoverEvent('.hover-pencil', '.ti-ruler-pencil');
  addHoverEvent('.hover-desktop', '.ti-desktop');  
  addHoverEvent('.hover-vector', '.ti-vector');  
  addHoverEvent('.hover-palette', '.ti-palette');  

   $('.icon-skills').one('inview', function(event, isInView) {
    if (isInView) {
     console.log('triggered inview');
     $('.icon-skills').mouseover();
      window.setTimeout(function() {
        $('.icon-skills').mouseleave();
      }, 900);
    }
  });

});