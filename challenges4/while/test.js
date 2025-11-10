let kata = "programming";
let i = 0;
let ditemukan = false;

while (i < kata.length && !ditemukan) {
  if (kata[i] === 'a') {
    ditemukan = true;
  } else {
    i++;
  }
}

if (ditemukan) {
  console.log("Huruf 'a' ditemukan di posisi: " + i);
} else {
  console.log("Huruf 'a' tidak ditemukan");
}
