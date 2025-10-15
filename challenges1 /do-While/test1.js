const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tanyaAngka() {
  rl.question("Masukkan angka: ", (input) => {
    const angka = parseInt(input);
    console.log(`Kuadrat dari ${angka} adalah: ${angka * angka}`);

    rl.question("Apakah ingin melanjutkan? (y/n): ", (jawab) => {
      if (jawab.toLowerCase() === "y") {
        tanyaAngka(); // ulangi
      } else {
        console.log("Terima kasih telah menggunakan program!");
        rl.close();
      }
    });
  });
}


tanyaAngka(); // mulai program
