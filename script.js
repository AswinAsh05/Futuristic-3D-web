// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Cursor trail
const cursor = document.querySelector('.cursor-trail');
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Parallax Heading
document.addEventListener('mousemove', (e) => {
  const heading = document.querySelector('[data-parallax]');
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX - innerWidth / 2) / 30;
  const y = (e.clientY - innerHeight / 2) / 30;
  heading.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});
