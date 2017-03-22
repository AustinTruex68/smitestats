$(document).ready(function() {
    // $('.carousel').carousel({ fullWidth: true});
    $('.carousel.carousel-slider').carousel({ fullWidth: true });

    //not sure why I have to do this.. will need to look into it more later. href does not work.
    $('#home').click(function(){
        window.location = '/';
        $('#home').addClass('active');
    });

    $('#playerCompare').click(function(){
        window.location = '/playerCompare';
    });

    $('#godCompare').click(function(){
        window.location = '/godCompare';
    });

    $('#tierLists').click(function(){
        window.location = '/tierLists';
    });
});
$(".button-collapse").sideNav();
