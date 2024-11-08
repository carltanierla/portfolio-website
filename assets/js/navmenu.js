const navMenu = document.querySelector('#nav-menu'),
navToggle = document.querySelector('#nav-toggle');
navClose = document.querySelector('#nav-close'),
navLink = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu');
    });
}

if (navClose) { 
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu');
    });
}

function linkAction() {
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show__menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
