

// Toggle navigation menu
document.getElementById('nav-toggle').addEventListener('click', function() {
  document.getElementById('nav-men').classList.toggle('open');
});

// Close navigation menu
document.getElementById('close-nav').addEventListener('click', function() {
  document.getElementById('nav-men').classList.remove('open');
});




$(document).ready(function () {
  $(".owl-carousel-cars").owlCarousel({
    loop: true,
    margin: 20,
    navText: [
    
    ],
    responsive: {
      0: {
        items: 1, // Shows 1 item on screens with width 0px to 599px
      },
      600: {
        items: 3, // Shows 3 items on screens with width 600px to 999px
      },
      1000: {
        items: 3, // Shows 4 items on screens 1000px and wider
      },
    },
  });
});






document
  .getElementById("select-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from following its href
    const dropdown = document.getElementById("dropdown");

    // Show the dropdown
    dropdown.style.display = "block";
  });





// Close dropdown with 'x' icon
document
  .getElementById("close-dropdown")
  .addEventListener("click", function () {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = "none";
  });

// Optional: Close the dropdown if user clicks outside of it
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown");
  const selectLink = document.getElementById("select-link");

  if (!selectLink.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

// Optional: To close the popup if clicked outside
window.onclick = function (event) {
  var popup = document.getElementById("popup-menu");
  if (
    event.target !== document.querySelector(".sticky-button") &&
    popup.contains(event.target)
  ) {
    popup.style.display = "none";
  }
};








// // Get the button and form elements
// const searchButton = document.getElementById('search-make-model');
// const formContainer = document.getElementById('form-container');


// // Add event listener to the button
// searchButton.addEventListener('click', () => {
//   // Toggle the form's visibility
//   if (formContainer.style.display === 'none' || formContainer.style.display === '') {
//     formContainer.style.display = 'block'; // Show the form
//   } else {
//     formContainer.style.display = 'none'; // Hide the form
//   }
// });


// // Get the button and form elements
// const Button = document.getElementById('search-category');
// const secContainer = document.getElementById('category-sec');

// // Add event listener to the button
// Button.addEventListener('click', () => {
//   // Toggle the form's visibility
//   if (secContainer.style.display === 'none' || secContainer.style.display === '') {
//     secContainer.style.display = 'block'; // Show the form
//   } else {
//     secContainer.style.display = 'none'; // Hide the form
//   }
// });


// $(document).ready(function() {
//   $('#search-make-model').click(function() {
//     $(this).toggleClass('btn-red btn-white');
//   });

//   $('#search-category').click(function() {
//     $(this).toggleClass('btn-red btn-white');
//   });
// });







$(document).ready(function() {
  $('#search-make-model').click(function() {
    $(this).toggleClass('btn-white');
    $('#search-category').removeClass('btn-white');
    $("#form-container").toggle();
    $("#category-sec").hide();
  });

  $('#search-category').click(function() {
    $(this).toggleClass('btn-white');
    $("#category-sec").toggle();
    $("#form-container").hide();
    $('#search-make-model').removeClass('btn-white');
  });
});















