
// soal-02.js

let hargaBarang = 25000;
let jumlahBarang = 4;
let diskon = 10;

// Menghitung total sebelum diskon
let totalHarga = hargaBarang * jumlahBarang;

// Menghitung besaran diskon
let potongan = totalHarga * diskon / 100;

// Menghitung total pembayaran
let totalBayar = totalHarga - potongan;

console.log("Total sebelum diskon: Rp" + totalHarga);
console.log("Besaran Diskon: Rp" + potongan);
console.log("Total pembayaran: Rp" + totalBayar);
