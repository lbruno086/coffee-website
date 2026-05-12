// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Add to cart feedback
document.querySelectorAll('.menu-card .btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const original = this.textContent;
    this.textContent = '✓ Added';
    this.style.background = '#2D7A4F';
    setTimeout(() => {
      this.textContent = original;
      this.style.background = '';
    }, 1600);
  });
});

// Email form
document.querySelector('.cta-form')?.addEventListener('submit', e => e.preventDefault());
document.querySelector('.email-input')?.closest('form')?.addEventListener('submit', e => e.preventDefault());
