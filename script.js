// script.js

// --- Fungsi untuk membuka undangan dari welcome screen ---
function bukaUndangan() {
  const welcome = document.getElementById('welcome');
  welcome.style.display = 'none';  // sembunyikan welcome screen

  // Mulai musik otomatis saat undangan dibuka
  const music = document.getElementById('background-music');
  music.play().catch(e => {
    // Jika browser blokir autoplay, bisa diabaikan
    console.log('Autoplay diblokir:', e);
  });
}


// --- Countdown ke tanggal acara ---
function countdown() {
  const countdownEl = document.getElementById('countdown');
  const eventDate = new Date('July 20, 2025 10:00:00').getTime(); // contoh jam 10 pagi

  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "<strong>Acara sudah berlangsung!</strong>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML =
    `<strong>Countdown Menuju Acara:</strong><br>` +
    `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

// Jalankan countdown tiap detik
setInterval(countdown, 1000);
countdown(); // langsung tampil saat load
// Countdown ke tanggal pernikahan
const countdownDate = new Date("2025-07-20T00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
  const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `
    <h3>Menuju Hari Bahagia:</h3>
    <p>${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik</p>
  `;

  if (distance < 0) {
    countdownEl.innerHTML = "<h3>Acara sedang berlangsung!</h3>";
  }
}, 1000);

// Musik toggle
const backgroundMusic = document.getElementById('background-music');
const btnMusicToggle = document.getElementById('btn-music-toggle');

btnMusicToggle.addEventListener('click', function () {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    btnMusicToggle.textContent = '🔊';
  } else {
    backgroundMusic.pause();
    btnMusicToggle.textContent = '🔇';
  }
});

// Buka undangan
function bukaUndangan() {
  document.getElementById('welcome').style.display = 'none';
  backgroundMusic.play();
}
