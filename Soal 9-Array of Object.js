
// soal-09.js

const mahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

let lulus = mahasiswa.filter(m => m.nilai >= 75);
let tidakLulus = mahasiswa.filter(m => m.nilai < 75);

console.log("Mahasiswa yang lulus:");

lulus.forEach(m => {
    console.log(m.nama, m.nilai);
});

console.log("Mahasiswa yang tidak lulus:");

tidakLulus.forEach(m => {
    console.log(m.nama, m.nilai);
});

console.log("Jumlah mahasiswa lulus:", lulus.length);

let urutan = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);

console.log("Urutan nilai tertinggi:");

urutan.forEach(m => {
    console.log(m.nama, m.nilai);
});
