// Mobile menu toggle
document.getElementById('mobile-menu-button').onclick = function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
};

// Carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

setInterval(() => {
    items[currentIndex].classList.add('hidden');
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.remove('hidden');
    items[currentIndex].classList.add('active');
}, 5000);