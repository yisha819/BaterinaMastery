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

/* ===== TYPEWRITER EFFECT ===== */
const typewriterElement = document.getElementById('typewriter');
const phrases = [
  "3rd Year IT Student",
  "Web Technology Major",
  "Technical Problem Solver"
];
let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentPhrase.substring(0, characterIndex - 1);
    characterIndex--;
    typingSpeed = 50; // Faster deletion
  } else {
    typewriterElement.textContent = currentPhrase.substring(0, characterIndex + 1);
    characterIndex++;
    typingSpeed = 100; // Natural typing speed
  }

  if (!isDeleting && characterIndex === currentPhrase.length) {
    typingSpeed = 2000; // Pause at full phrase
    isDeleting = true;
  } else if (isDeleting && characterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500; // Pause before starting next phrase
  }

  setTimeout(typeEffect, typingSpeed);
}

// Initialise typewriter
window.addEventListener('load', () => {
  if (typewriterElement) {
    typewriterElement.textContent = '';
    setTimeout(typeEffect, 1000);
  }
});