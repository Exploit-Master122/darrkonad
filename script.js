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

<script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
<script>
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      size: { value: 3 },
      move: { speed: 1 },
      line_linked: {
        enable: true,
        distance: 100,
        opacity: 0.3
      },
      color: { value: "#ffffff" }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    }
  });
</script>
