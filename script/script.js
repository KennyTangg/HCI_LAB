'use strict'; // Enable strict mode for safer JavaScript code

const menuToggle = document.querySelectorAll('.show-modal');

// Menu toggle functionality
const toggleMenu = function (event) {
    const button = event.target; // Get the button that was clicked
    const list = button.nextElementSibling; // Find the next sibling element (the <ol> menu list)

    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden'); // If hidden, remove 'hidden' class to show the list
    } else {
        list.classList.add('hidden'); // If visible, add 'hidden' class to hide the list
    }
};
menuToggle.forEach(button => {
    button.addEventListener('click', toggleMenu);
});