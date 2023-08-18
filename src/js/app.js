const hamburgerBtn = document.querySelector('.hamburger-btn');
const navbarHamburger = document.querySelector('.navbar-hamburger');

hamburgerBtn.addEventListener('click', () => {
    if (navbarHamburger.style.display === 'block') {
        navbarHamburger.style.display = 'none';
    } else {
        navbarHamburger.style.display = 'block';
    }
});

