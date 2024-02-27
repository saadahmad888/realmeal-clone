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
  margin:10,
  autoplay:true,
  autoplayTimeout:4000,
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
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav:false,
    },
    410: {
      items: 1,
      dots: true,
      nav:false,
    },
    600: {
      items: 1,
      dots: false,
      nav: true,
    },
    1000: {
      items: 1,
      dots: false,
      nav: true,
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


$('#detail-meal-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
});

$('#transformation-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    }
  }
});


$('#trainer-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    }
  }
});

$('#shop-now-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    }
  }
});

$('#quick-view-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
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




// Website Popup

// Function to open the popup after 2 seconds
function openPopup() {
  setTimeout(function () {
      document.getElementById('popup-container').style.display = 'flex';
  }, 1000); // 2000 milliseconds = 2 seconds
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup-container').style.display = 'none';
}

// Open the popup when the page is loaded
window.onload = openPopup;

