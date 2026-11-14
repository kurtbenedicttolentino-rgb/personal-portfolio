// Mobile Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a navigation link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact Form Submission Feedback
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const senderName = document.getElementById('name').value.trim();
  formStatus.textContent = `Thank you, ${senderName}! Your message has been recorded.`;
  contactForm.reset();
});

// Automatic Footer Year
document.getElementById('year').textContent = new Date().getFullYear();