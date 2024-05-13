$(function() {

    
    var $tabs = $('.tabs li a'); 
    $tabs.on('click', function(e) {
      e.preventDefault();
      $tabs.removeClass('active');
      $(this).addClass('active');
  
      $('.item').fadeOut(300);
      $(this.hash).delay(300).fadeIn();
    });
  
  });