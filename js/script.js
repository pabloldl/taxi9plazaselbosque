'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  document.documentElement.classList.add('motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('arrived');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.arrive').forEach(element => observer.observe(element));
}
const journey = document.querySelector('.journey');
const progress = document.getElementById('route-progress');
let ticking = false;
function updateRoute() {
  const rect = journey.getBoundingClientRect();
  const value = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - rect.top) / rect.height));
  progress.style.transform = `scaleY(${value})`;
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { window.requestAnimationFrame(updateRoute); ticking = true; }
}, { passive: true });
window.addEventListener('resize', updateRoute);
updateRoute();
const copyButton = document.getElementById('copy-number');
const status = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  status.textContent = '';
  let copied = false;
  try {
    await navigator.clipboard.writeText('615548570');
    copied = true;
  } catch {
    const field = document.getElementById('phone-value');
    document.getElementById('manual-copy').hidden = false;
    field.focus();
    field.select();
    try { copied = document.execCommand('copy'); } catch { copied = false; }
  }
  if (copied) {
    document.getElementById('manual-copy').hidden = true;
    copyButton.focus({ preventScroll: true });
    status.textContent = 'Número copiado: 615 548 570';
  } else {
    status.textContent = 'No se pudo copiar automáticamente. Puedes copiar el número del campo seleccionado.';
  }
});
