/* =======================================================================
    Sticky Nav
========================================================================== */
window.addEventListener('scroll', function() {
  myFunction();
});

var navbar = document.getElementById("main-nav");

function myFunction() {
  if (window.scrollY >= 100) {
    navbar.classList.add("colored");
  } else {
    navbar.classList.remove("colored");
  }
}




(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


$('#top-pickes-slider').owlCarousel({
  loop:true,
  margin: 20,
  stagePadding: 50,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navText : ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false,
          dots: true,
      },
      600:{
          items:2,
          nav:false,
          dots: true,
      },
      1000:{
          items:4,
          nav:true,
          dots: false,
      }
    }
})

$('#customer-reviews-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  autoHeight: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    410: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    }
  }
})

// Promotional Popup CSS
$(document).ready(function() {
  // Show the overlay and popup when the page loads
  $("#overlay, #promoPopup").fadeIn();

  // Close the popup when the close button is clicked
  $(".close-btn").click(function() {
    $("#overlay, #promoPopup").fadeOut();
  });
});





$('#blog-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav:true,
  dots: false,
  navText : ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    }
  }
})

$('#meal-plan-slider').owlCarousel({
  loop: true,
  margin: 10,
  navText : ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false,
    },
    600: {
      items: 2,
      nav: false,
      dots: true,
    },
    1000: {
      items: 4,
      nav: false,
      dots: true,
    }
  }
})

$('#testimonial-slider').owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: false,
    },
    600: {
      items: 1,
      dots: true,
      nav: false,
    },
    1000: {
      items: 2,
      dots: false,
      nav: true,
    }
  }
});




// Initialize Isotope for filtering
var $portfolio = $('.portfolio').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});

// Filtering function
$('.filter-button-group').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $portfolio.isotope({ filter: filterValue });
});

// Change is-checked class on buttons
$('.filter-button-group').each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});



