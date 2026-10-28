// Mobile drawer, theme toggle, Pagefind search. Everything degrades to plain links without JS.
const root = document.documentElement;
const btn = document.querySelector('.menu-btn');
const side = document.getElementById('side');
btn?.addEventListener('click', () => {
  const open = side.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});
side?.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    side.classList.remove('open');
    btn?.setAttribute('aria-expanded', 'false');
  }
});
document.querySelector('.theme-btn')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {}
});
document.querySelector('[aria-current="page"]')?.scrollIntoView({ block: 'center' });
// Deferred scripts run in order, so pagefind-ui.js has already defined PagefindUI here.
if (window.PagefindUI) new PagefindUI({ element: '#search', showSubResults: false, showImages: false, resetStyles: false, translations: { placeholder: 'Search the docs' } });
