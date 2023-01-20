let desk_produk = {
    produk: "Paper A4 Sidu",
    typeProduk: "ATK",
    namaToko: "Sinar Abadi",
    lokasiToko: "Bandung",
    harga: 30000
}

const pernyataan = desk_produk.harga <= 50000 ? 'Wah Murah Banget': 'Wah Mahal Banget';
const kondisiOr = desk_produk.harga > 50000 || "Saya Beli";
const kondisiAnd = desk_produk.produk == "Paper A4 Sidu" && "Saya Checkout";
console.log(pernyataan);
console.log(kondisiOr);
console.log(kondisiAnd);
