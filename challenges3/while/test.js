const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function tanya(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
}

async function main() {
  let pilihan = 0;

  while (pilihan !== 4) {
    console.log("\n=== MENU KALKULATOR ===");
    console.log("1. Tambah");
    console.log("2. Kurang");
    console.log("3. Kali");
    console.log("4. Keluar");

    pilihan = parseInt(await tanya("Pilih menu (1-4): "));

    if (pilihan === 1) {
      console.log("Anda memilih Tambah");
    } else if (pilihan === 2) {
      console.log("Anda memilih Kurang");
    } else if (pilihan === 3) {
      console.log("Anda memilih Kali");
    } else if (pilihan === 4) {
      console.log("Terima kasih telah menggunakan program!");
    } else {
      console.log("Pilihan tidak valid, coba lagi.");
    }
  }

  rl.close(); 
}

main(); 
