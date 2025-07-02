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

// Countdown Timer for Darrkon v7 - Launches every August 31
function getNextLaunchDate() {
  const now = new Date();
  const year = now.getFullYear();
  const launchDate = new Date(`August 31, ${year} 00:00:00`);

  return now > launchDate
    ? new Date(`August 31, ${year + 1} 00:00:00`)
    : launchDate;
}

function updateCountdown() {
  const target = getNextLaunchDate().getTime();
  const now = new Date().getTime();
  const gap = target - now;

  const second = 1000;
  const minute = second * 60;
  const hour   = minute * 60;
  const day    = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  if (gap <= 0) {
    document.getElementById("countdown").innerHTML = "<h3>🚀 Darrkon v7 has Launched!! 🚀</h3>";
  } else {
    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
  }
}

setInterval(updateCountdown, 1000);

// Matrix Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = '我的網站完全是由超文本標記語言構成的哈哈'.split('');
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);
