$(document).foundation({
  interchange: {
    named_queries : {
      smallretina : 'only screen and (min-width: 1px) and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: 1px) and (min--moz-device-pixel-ratio: 2), only screen and (min-width: 1px) and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: 1px) and (min-device-pixel-ratio: 2), only screen and (min-width: 1px) and (min-resolution: 192dpi), only screen and (min-width: 1px) and (min-resolution: 2dppx)',
      mediumretina : 'only screen and (min-width: 641px) and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: 641px) and (min--moz-device-pixel-ratio: 2), only screen and (min-width: 641px) and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: 641px) and (min-device-pixel-ratio: 2), only screen and (min-width: 641px) and (min-resolution: 192dpi), only screen and (min-width: 641px) and (min-resolution: 2dppx)',
      largeretina : 'only screen and (min-width: 1025px) and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: 1025px) and (min--moz-device-pixel-ratio: 2), only screen and (min-width: 1025px) and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: 1025px) and (min-device-pixel-ratio: 2), only screen and (min-width: 1025px) and (min-resolution: 192dpi), only screen and (min-width: 1025px) and (min-resolution: 2dppx)'
    }
  }
});

/**
 * Based on ihatetomatoes article: http://ihatetomatoes.net/how-to-make-parallax-website-responsive/
 */

( function( $ ) {

  // Setup variables
  $window = $(window);
  $slide = $('.homeSlide');
  $body = $('body');

  //FadeIn all sections
  $body.imagesLoaded( function() {
    setTimeout(function() {
      // Resize sections
      adjustWindow();

        // Fade in sections
      $body.removeClass('loading').addClass('loaded');
    }, 800);
  });

  function adjustWindow(){

      // Get window size
      winH = $window.height();
      winW = $window.width();

      // Keep minimum height 550
      if(winH <= 550) {
        winH = 550;
      }

    // Init Skrollr for 768 and up
    if( winW >= 768) {

      // Init Skrollr
      var s = skrollr.init({
        forceHeight: false
      });

      // Resize our slides
      $slide.height(winH);

      s.refresh($('.homeSlide'));

    } else {
      // Init Skrollr
      var s = skrollr.init();
      s.destroy();
    }

    // Check for touch
      if(Modernizr.touch) {

      // Init Skrollr
      var s = skrollr.init();
        s.destroy();
      }

  }

  function initAdjustWindow() {
    return {
        match : function() {
          adjustWindow();
        },
        unmatch : function() {
          adjustWindow();
        }
    };
  }

  enquire.register(
    "screen and (min-width : 768px)", 
    initAdjustWindow(), false
  ).listen(100);

} )( jQuery );