/*--------------------------------------------------------------------
 *JAVASCRIPT "simpleBlackLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT
-----------------------------------------------------------------------*/
(function($) {
    $.fn.simpleBlackLoader = function(options) {
      //Defaults
      var settings = $.extend(
        {
          timeToHide: 1200,
          pos: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          zIndex: "999",
          bgColor: "#000000",
          spinner: "spinner7",
          imagePath: ""
        },
        options
      );
      var spinner01 ='<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div><div class="double-bounce3"></div></div>';
      var el = $(this);
      var initStyles = {
        position: settings.pos,
        width: settings.width,
        height: settings.height,
        top: settings.top,
        left: settings.left
      };
      el.css(initStyles);
      el.html(spinner01);
      if (settings.imagePath != "") {
        el.html('<div class="fl"><img src="' + settings.imagePath + '"></div>');
        centerLoader();
      }
      //Time to hide simpleBlackLoader
      setTimeout(function() {
        $(el).fadeOut();
      }, settings.timeToHide);
      //Return Styles
      return this.css({
        backgroundColor: settings.bgColor,
        zIndex: settings.zIndex
      });
    }; // End Fake Loader
    function centerLoader() {
      var winW = $(window).width();
      var winH = $(window).height();
      var spinnerW = $(".fl").outerWidth();
      var spinnerH = $(".fl").outerHeight();
      $(".fl").css({
        position: "absolute",
        left: parseInt(winW / 2 - spinnerW / 2, 10),
        top: parseInt(winH / 2 - spinnerH / 2, 10)
      });
    }
    $(window).on("load",function() {
      centerLoader();
      $(window).resize("load",function() {
        centerLoader();
      });
    });
  })(jQuery);