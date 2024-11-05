const contactForm = document.querySelector('#contact-form'),
contactName = document.querySelector('#contact-name'),
contactEmail = document.querySelector('#contact-email'),
contactSubject = document.querySelector('#contact-subject'),
contactMessage = document.querySelector('#contact-message'),
errorMessage = document.querySelector('#error-message');

const sendEmail = (e) => {
    e.preventDefault();
    
    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === ''
    ) {
        errorMessage.textContent = 'Please Input all the fields'
    }

    else {
        emailjs.sendForm(
            'service_a29l6lp', 
            'template_6da15tg', 
            '#contact-form',
            'dEMApkDLo-s4tL9Cu'
        ).then(() => {
            errorMessage.classList.add('color-primary');
            errorMessage.textContent = 'Message sent ✔';

            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('OOPs! SOMETHING WENT WRONG...', error)
        });

        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail);