function getCurrentTime() {
  const now = new Date();

  let jam = now.getHours();
  let menit = now.getMinutes();
  let detik = now.getSeconds();

  jam = String(jam).padStart(2, '0');
  menit = String(menit).padStart(2, '0');
  detik = String(detik).padStart(2, '0');

  return `${jam}:${menit}:${detik}`;
}

let waktu = getCurrentTime();
console.log("Waktu sekarang: " + waktu);
