$(document).ready(function() {
    // $('.carousel').carousel({ fullWidth: true});
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    
    //not sure why I have to do this.. will need to look into it more later. href does not work.
    $('#home').click(function(){
        window.location = '/'
    });
});
$(".button-collapse").sideNav();
