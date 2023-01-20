let e_comerce = [
    {
        produk: "Lampu Philips 20watt",
        typeProduk: "Electronic",
        namaToko: "Maju Lancar",
        lokasiToko: "Bekasi",
        harga: 20000
    },
    {
        produk: "TV LED Samsung 20\"",
        typeProduk: "Electronic",
        namaToko: "Maju Lancar",
        lokasiToko: "Bekasi",
        harga: 1500000
    },
    {
        produk: "Speaker JBL",
        typeProduk: "Electronic",
        namaToko: "Maju Lancar",
        lokasiToko: "Bekasi",
        harga: 320000
    },
    {
        produk: "Pulpen Biru",
        typeProduk: "ATK",
        namaToko: "Sinar Abadi",
        lokasiToko: "Bandung",
        harga: 10000
    },
    {
        produk: "Buku Big Campus",
        typeProduk: "ATK",
        namaToko: "Sinar Abadi",
        lokasiToko: "Bandung",
        harga: 20000
    },
    {
        produk: "Paper A4 Sidu",
        typeProduk: "ATK",
        namaToko: "Sinar Abadi",
        lokasiToko: "Bandung",
        harga: 50000
    }
]

const namaProduk = e_comerce.map((nama) => nama.produk)
const hasil = e_comerce.filter((sekolah) => sekolah.typeProduk = 'Bandung');
console.log(hasil);
console.log(namaProduk);