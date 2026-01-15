/* ===== THEME & MENU ===== */
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
  const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

/* ===== MAGNETIC TILT EFFECT ===== */
const nameHeader = document.querySelector('.highlight');
nameHeader.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = nameHeader;
    const { offsetX: x, offsetY: y } = e;
    const xRotation = ((y / height) - 0.5) * 20;
    const yRotation = ((x / width) - 0.5) * -20;
    nameHeader.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1)`;
});
nameHeader.addEventListener('mouseleave', () => {
    nameHeader.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)`;
});

/* ===== FORM VALIDATION ===== */
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = "Message Sent! ✓";
  btn.style.background = "var(--accent-green)";
  e.target.reset();
  setTimeout(() => { btn.textContent = "Send Message"; btn.style.background = ""; }, 3000);
});

/* ===== REVEAL ON SCROLL ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('reveal'); });
}, { threshold: 0.15 });

document.querySelectorAll('.section-title, .info-card, .skill-card, .photo-placeholder').forEach(el => observer.observe(el));
window.addEventListener('load', () => document.querySelector('.hero').classList.add('show'));