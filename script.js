// AOS init
AOS.init({
  duration: 1000,
  once: true
});

// Dark mode toggle
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
