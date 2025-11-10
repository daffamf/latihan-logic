let kata = "programming";
let jumlahVokal = 0;

for (let i = 0; i < kata.length; i++) {
  let huruf = kata[i];
  if (
    huruf === "a" ||
    huruf === "i" ||
    huruf === "u" ||
    huruf === "e" ||
    huruf === "o"
  ) {
    jumlahVokal++;
  }
}

console.log("Jumlah vokal: " + jumlahVokal);
