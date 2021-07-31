$(document).ready(function() {

	/*--- Sticky Navigation ---*/
	$('.js--section-about').waypoint(function(direction) {
		if(direction=="down") {
			$('nav').addClass('sticky');
		}
		else {
			$('nav').removeClass('sticky');
		}
		
	})

	/* --- Play Animations when scrolled in to a section---*/
	$('.js--wp-1').waypoint(function(direction) {
			$('.js--service-card').addClass('animate__animated animate__zoomIn');
	}, {
		offset:'50%'
	});

	$('.js--wp-2').waypoint(function(direction) {
			$('.js--package-box-enterprise').addClass('animate__animated animate__pulse');
	});

	$('.js--section-about').waypoint(function(direction) {
			$('.js--about').addClass('animate__animated animate__fadeIn');
	}, {
		offset:'55%'
	});


	/*--- Scroll to Contacts ---*/
	$('.js--scroll-to-contact').click(function() {
		$('html, body').animate({scrollTop:$('.js--section-form').offset().top}, 1000);
	})

	/*--- Smooth Scrolling for Navigation (from https://css-tricks.com/snippets/jquery/smooth-scrolling/)  ---*/
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });

})