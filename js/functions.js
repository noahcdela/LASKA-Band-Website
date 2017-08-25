$(function(){

  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  $('.nav-toggle').click(function(){
    $('nav ul').toggleClass('on');
    $('.span-1').toggleClass('x-1');
    $('.span-2').toggleClass('x-2');
    $('.span-3').toggleClass('x-3');
  });

  $('a, section, footer').on('click', function(){
    $('nav ul').removeClass('on');
    $('.span-1').removeClass('x-1');
    $('.span-2').removeClass('x-2');
    $('.span-3').removeClass('x-3');
  });

  $(window).scroll(function(){

    var scroll = $(this).scrollTop();

    $('.logo').css({
      'transform' : 'translate(0px, '+ scroll /4 +'%)'
    });

    if (scroll >= 100) {
      $('nav').addClass('scrolled');
      $('nav ul').addClass('ul-scrolled');
    } else {
      $('nav').removeClass('scrolled');
      $('nav ul').removeClass('ul-scrolled');
    }

  });

  // Flickity
  $('.lyrics-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    arrowShape: { 
      x0: 10,
      x1: 60, y1: 50,
      x2: 60, y2: 40,
      x3: 20
    }
  });

  $('.photos-carousel').flickity({
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
});
