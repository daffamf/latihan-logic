let totalBelanja = 350000;
let diskon = 0;

if (totalBelanja >= 500000) {
  diskon = 0.20; // 20%
} else if (totalBelanja >= 200000) {
  diskon = 0.10; // 10%
} else if (totalBelanja >= 100000) {
  diskon = 0.05; // 5%
}

let jumlahDiskon = totalBelanja * diskon;
let totalBayar = totalBelanja - jumlahDiskon;

console.log(`Total belanja: Rp ${totalBelanja}`);
console.log(`Diskon: ${diskon * 100}%`);
console.log(`Total bayar: Rp ${totalBayar}`);
