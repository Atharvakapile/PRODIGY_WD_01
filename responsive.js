// Select the navbar element
const navbar = document.getElementById('navbar');

// Function to handle scroll event
window.onscroll = function() {
    if (window.scrollY > 50) { // Change when scrolled down 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
