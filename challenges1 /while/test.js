const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let angka;

function tanya() {
  rl.question("Masukkan angka antara 1 - 10: ", (input) => {
    angka = Number(input);

    while (isNaN(angka) || angka < 1 || angka > 10) {
      console.log("Input tidak valid, masukkan angka 1 - 10.");
      return tanya(); 
    }

    console.log("Angka valid yang dimasukkan:", angka);
    rl.close();
  });
}

tanya();