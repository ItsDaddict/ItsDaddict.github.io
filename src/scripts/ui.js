// 1. Spotlight: track the pointer
const root = document.documentElement;
addEventListener('pointermove', (e) => {
  root.style.setProperty('--x', e.clientX + 'px');
  root.style.setProperty('--y', e.clientY + 'px');
}, { passive: true });

// 2. Fade-in on scroll
const io = new IntersectionObserver((entries) => {
  for (const en of entries) if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// 3. Scroll-spy for the navigation
const links = [...document.querySelectorAll('.nav-link')];
const spy = new IntersectionObserver((entries) => {
  for (const en of entries) {
    if (!en.isIntersecting) continue;
    links.forEach((a) => a.setAttribute('data-active', String(a.getAttribute('href') === '#' + en.target.id)));
    links.find((a) => a.dataset.active === 'true' && a.closest('[data-mobile-nav]'))
      ?.scrollIntoView({ inline: 'center', block: 'nearest' });
  }
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));
