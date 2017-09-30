$(document).foundation()
$("#call-section").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 120
    }, 1000);
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if(wScroll > 500 ){
    $( ".title-bar" ).addClass( "backing" );
  }
  else if(wScroll < 500){
    $( ".title-bar" ).removeClass( "backing" );
  }

});
