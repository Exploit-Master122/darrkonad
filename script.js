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
    document.getElementById("countdown").innerHTML = "<h3>🎉 Happy Darrkon Day! Darrkon v7 is Live!</h3>";
  } else {
    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
  }
}

setInterval(updateCountdown, 1000);
