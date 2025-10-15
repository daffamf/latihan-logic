let berat = 70; // kg
let tinggi = 1.75; // meter

// Hitung BMI terlebih dahulu
let bmi = berat / (tinggi * tinggi);
let kategori = "";

// Tulis kode if-else if-else statement di sini
if (bmi < 18.5) {
  kategori = "Underweight";
} else if (bmi < 25) {
  kategori = "Normal";
} else if (bmi < 30) {
  kategori = "Overweight";
} else {
  kategori = "Obese";
}

console.log("BMI:", bmi.toFixed(2));
console.log("Kategori:", kategori);
