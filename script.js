// Simple smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if(hash[0] === "#") {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({behavior:'smooth'});
    }
  });
});
// Dummy contact form handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting Buildwise! We'll get back to you soon.");
  this.reset();
});