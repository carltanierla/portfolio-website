const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector('#' + tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });
        
        target.classList.add('tab__active');
        tab.style.animationName = 'hide';
        
        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });
        tab.classList.add('tab__active');
        
        if (target.id === 'skills') {
            target.classList.add('d-flex');
        } else {
            document.querySelector('#skills').classList.remove('d-flex');
        }

    });
})