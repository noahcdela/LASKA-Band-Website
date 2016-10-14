$(function(){

  $(window).ready(function(){
    // Initialize fadeIn hero functions
    fadeInNav();
    fadeInLogoHero()
  })

  var $carousel = $('.carousel').flickity({
    wrapAround: true,
    imagesLoaded: true,
    percentPosition: false,
    initialIndex: 2,
    arrowShape: {
      x0: 15,
      x1: 60, y1: 45,
      x2: 70, y2: 45,
      x3: 25
    }
  });

  var $imgs = $carousel.find('.carousel-cell img');
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  // get Flickity instance
  var flkty = $carousel.data('flickity');

  $carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/3;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });

  // LASKA logo hero parallax
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });
  });

  (function($) {
      "use strict"; // Start of use strict

      // jQuery for page scrolling feature - requires jQuery Easing plugin
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: ($($anchor.attr('href')).offset().top - 0)
          }, 1250, 'easeInOutExpo');
          event.preventDefault();
      });
  })(jQuery); // End of use strict

  function fadeInNav() {
    $("nav").delay(800).animate({"opacity":"1"}, 1000);
  }

  function fadeInLogoHero() {
    $(".logo").delay(1200).animate({"opacity":"1"}, 1500);
  }


});
