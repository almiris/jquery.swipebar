/**
 * jQuery swipeBar v1.0
 * A swipe bar plugin for jQuery
 * Licensed under the MIT license.
 * Copyright 2012 Almiris, http://www.almiris.fr
 */
(function($) {
  $.fn.swipeBar = function(options) {
    var settings = $.extend({
      "idn" : "<span class='dot'/>",
      "adn" : "<span class='dot dot_a'/>",
      "ad" : 0,
      "td" : 1
    }, options);
    return this.each(function() {
      var $this = $(this);
      for (var i = 0; i < settings.td; i++) {
        $(i == settings.ad ? settings.adn : settings.idn).appendTo($this);
      }        
    });
  }
})(jQuery);
