function scrollHeader() {
    const header = document.querySelector('#header');
    
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');

}

function scrollUp() {
    const scrollUp = document.querySelector('#scroll-up');
    
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');

}

window.addEventListener('scroll', scrollHeader);
window.addEventListener('scroll', scrollUp);