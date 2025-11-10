const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let saldo = 100000;

function tanyaMenu() {
  console.log("\n=== ATM MENU ===");
  console.log("1. Cek Saldo");
  console.log("2. Tarik Tunai");
  console.log("3. Setor Tunai");
  console.log("4. Keluar");

  rl.question("Pilih menu: ", (jawaban) => {
    let pilihan = parseInt(jawaban);

    switch (pilihan) {
      case 1:
        console.log("Saldo Anda: Rp " + saldo);
        break;

      case 2:
        rl.question("Masukkan jumlah yang ingin ditarik: Rp ", (jumlah) => {
          let tarik = parseInt(jumlah);
          if (tarik <= saldo) {
            saldo -= tarik;
            console.log(`Penarikan berhasil. Sisa saldo: Rp ${saldo}`);
          } else {
            console.log("Saldo tidak cukup!");
          }
          tanyaLanjut(); 
        });
        return;

      case 3:
        rl.question("Masukkan jumlah yang ingin disetor: Rp ", (jumlah) => {
          let setor = parseInt(jumlah);
          saldo += setor;
          console.log(`Setoran berhasil. Saldo baru: Rp ${saldo}`);
          tanyaLanjut(); 
        });
        return;

      case 4:
        console.log("Terima kasih telah menggunakan ATM!");
        rl.close();
        return;

      default:
        console.log("Menu tidak valid!");
        break;
    }

    tanyaLanjut(); 
  });
}

function tanyaLanjut() {
  rl.question("Apakah ingin melakukan transaksi lagi? (y/n): ", (jawaban) => {
    if (jawaban.toLowerCase() === "y") {
      tanyaMenu(); 
    } else {
      console.log("Terima kasih telah menggunakan ATM!");
      rl.close();
    }
  });
}


tanyaMenu();
