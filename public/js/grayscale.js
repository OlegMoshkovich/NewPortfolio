
$(function() {
  $('#geometry').click(function() {
    alert( "I am clicked");
    $('.navbar-custom').css({"font-size: 100%;"});
    // $(this).css('background-image', 'url(images/tabs3.png)');
  });
}):


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    // $('a.page-scroll').bind('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top
    //     }, 1500, 'easeInOutExpo');
    //     event.preventDefault();
    // });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$('.carousel').carousel();
