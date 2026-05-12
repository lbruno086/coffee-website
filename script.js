// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Smooth appear on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .origin-card, .stat, .story-text, .story-visual').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// CTA form
document.querySelector('.cta-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
});

document.querySelector('.btn-primary[href="#order"]')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
});

// Add button feedback
document.querySelectorAll('.menu-card .btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const original = this.textContent;
    this.textContent = '✓ Added';
    this.style.background = '#2D7A4F';
    this.style.color = '#fff';
    setTimeout(() => {
      this.textContent = original;
      this.style.background = '';
      this.style.color = '';
    }, 1500);
  });
});
