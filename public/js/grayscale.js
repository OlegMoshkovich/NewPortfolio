// $(document).scroll(function(){
//  var targetOffset = $("#anchor-point").offset().top;

// var $w = $(window).scroll(function(){
//     if ( $w.scrollTop() > 200 ) {
//         $('.navbar-custom').css({"font-size: 100%;"});
//       //  $('#voice3').css({"border-bottom":"2px solid #2e375b"});
//     } else {
//       // ...
//     }
// });
$(function() {
  $('#geometry').click(function() {
    alert( "I am clicked");
    $('.navbar-custom').css({"font-size: 100%;"});
    // $(this).css('background-image', 'url(images/tabs3.png)');
  });
}):


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$('.carousel').carousel();
