// Toggle Navigation on Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close nav when a link is clicked (mobile)
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if(navLinks.classList.contains('open')){
            navLinks.classList.remove('open');
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === '' || email === '' || message === ''){
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate form submission (you can replace this with actual backend integration)
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you! Your message has been sent.';
    contactForm.reset();
});
