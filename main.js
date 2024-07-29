// JavaScript for interactivity and animations

// Example: Toggle mobile menu
const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
