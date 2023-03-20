const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

// update CountDownTime
function updateCountDowntime() {
  const currentYear = new Date();
  const diff = newYearTime - currentYear;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  document.getElementById('days').innerHTML = d;
  document.getElementById('hours').innerHTML = h < 10 ? '0' + h : h;
  document.getElementById('minutes').innerHTML = m < 10 ? '0' + m : m;
  document.getElementById('seconds').innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountDowntime, 1000);