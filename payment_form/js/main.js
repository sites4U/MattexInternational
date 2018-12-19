/**
 * Main js file for MATTEX INTERNATIONAL
 * https://daneden.github.io/animate.css/ -> Website to look for animations
 */

// Get the current year for the copyright.

// Wait for the web page to be ready
$(document).ready(function() {

    //Popovers:
    //Select the tags with a toggle value of popover. 
    $('[data-toggle="popover"]').popover({
        html: true,
        container: 'body',
        placement: function(){return $(window).width()>768 ? "left":"auto";},
        trigger: 'hover',
        //Then add their img value to the html tag.
        content: function(){
          return '<img class="img-fluid" src="' + $(this).data('img') + '"/>';
      }
    });

    //Animations, inspired by: https://codepen.io/benoitboucart/full/yJoqz
    $(function() {
        var $window = $(window),
          win_height_padded = $window.height() * 1.1,
          isTouch = Modernizr.touch;
      
        if (isTouch) {
          $(".revealOnScroll").addClass("animated");        //Check if the user is using a touch screen.
        }
      
        $window.on("scroll", revealOnScroll);               //Create event listener for the scroll event

        //revealOnScroll checks if the item we are animating has entered in the screen.
        function revealOnScroll() {
          var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;
      
          // Show the animations
          $(".revealOnScroll:not(.animated)").each(function() {
            var $this = $(this),
              offsetTop = $this.offset().top;
      
            if (scrolled + win_height_padded > offsetTop) {
              if ($this.data("timeout")) {
                window.setTimeout(function() {
                  $this.addClass("animated " + $this.data("animation"));
                }, parseInt($this.data("timeout"), 10));
              } else {
                $this.addClass("animated " + $this.data("animation"));
              }
            }
          });
          // Hide the animations
          $(".revealOnScroll.animated").each(function(index) {
            var $this = $(this),
              offsetTop = $this.offset().top;
            if (scrolled + win_height_padded < offsetTop) {
              $(this).removeClass("animated " + $this.data("animation"));
            }
          });
        }
      
        revealOnScroll();
      });
});



