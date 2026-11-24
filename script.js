// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
const statusMessage = document.querySelector('#form-status');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const visitorName = contactForm.querySelector('input[type="text"]').value;
  statusMessage.textContent = `Thanks, ${visitorName}! Your message has been sent.`;

  contactForm.reset();
});

// Dark Mode Toggle
const themeButton = document.querySelector('#theme-toggle');

themeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeButton.textContent = '☀️ Light Mode';
  } else {
    themeButton.textContent = '🌙 Dark Mode';
  }
});
