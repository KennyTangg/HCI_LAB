'use strict'; // Enable strict mode for safer JavaScript code

// Select all buttons that should open a modal (or toggle a menu)
const menuToggle = document.querySelectorAll('.show-modal'); 

// Function to toggle the visibility of the menu list
const toggleMenu = function (event) {
  const button = event.target; // Get the button that was clicked
  const list = button.nextElementSibling; // Find the next sibling element (the <ol> menu list)

  // Check if the list currently has the 'hidden' class
  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');  // If hidden, remove 'hidden' class to show the list
  } else {
    list.classList.add('hidden'); // If visible, add 'hidden' class to hide the list
  }
};

// Loop through each button and add a click event listener
for (let i = 0; i < menuToggle.length; i++) {
  menuToggle[i].addEventListener('click', toggleMenu); // When button is clicked, execute toggleMenu function
}
