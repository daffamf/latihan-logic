const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let angkaRahasia = 7;
let tebakan;
let percobaan = 0;

function mulaiTebak() {
  rl.question("Masukkan tebakan Anda: ", (input) => {
    let tebakan = parseInt(input);
    percobaan++;

    while (true) {
      if (tebakan === angkaRahasia) {
        console.log(` Selamat! Anda menebak benar dalam ${percobaan} percobaan.`);
        rl.close();
        break; 
      } else if (tebakan < angkaRahasia) {
        console.log("Terlalu kecil! Coba lagi.");
        return mulaiTebak();
      } else if (tebakan > angkaRahasia) {
        console.log("Terlalu besar! Coba lagi.");
        return mulaiTebak(); 
      }
    }
  });
}

mulaiTebak();