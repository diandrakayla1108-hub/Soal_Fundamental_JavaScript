
// soal-06.js

const nilai = [80, 75, 90, 65, 85, 95, 70];

// Menampilkan seluruh nilai
console.log("Seluruh nilai:", nilai);

// Mencari nilai tertinggi dan terendah
let tertinggi = Math.max(...nilai);
let terendah = Math.min(...nilai);

// Menghitung rata-rata
let total = 0;

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
}

let rataRata = total / nilai.length;

// Menghitung jumlah mahasiswa yang lulus
let jumlahLulus = 0;

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 75) {
        jumlahLulus++;
    }
}

console.log("Nilai tertinggi:", tertinggi);
console.log("Nilai terendah:", terendah);
console.log("Rata-rata:", rataRata);
console.log("Jumlah mahasiswa lulus:", jumlahLulus);
