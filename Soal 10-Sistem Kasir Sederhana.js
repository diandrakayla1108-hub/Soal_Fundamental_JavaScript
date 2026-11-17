
// soal-10.js

const produk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

// Data pembelian sesuai contoh PDF
const pembelian = [
    { nama: "Mouse", jumlah: 2 },
    { nama: "Keyboard", jumlah: 1 },
    { nama: "Headset", jumlah: 1 }
];

let subtotal = 0;

console.log("========= STRUK PEMBELIAN =========");

pembelian.forEach(item => {
    let barang = produk.find(p => p.nama === item.nama);
    let total = barang.harga * item.jumlah;

    subtotal += total;

    console.log(
        item.nama.padEnd(16) +
        "x" + item.jumlah +
        "     Rp" + total.toLocaleString("id-ID")
    );
});

let diskon = subtotal > 500000 ? subtotal * 0.1 : 0;
let totalBayar = subtotal - diskon;

console.log("-----------------------------------");
console.log("Subtotal          Rp" + subtotal.toLocaleString("id-ID"));
console.log("Diskon            Rp" + diskon.toLocaleString("id-ID"));
console.log("Total             Rp" + totalBayar.toLocaleString("id-ID"));
console.log("===================================");
console.log("Terima kasih!");
