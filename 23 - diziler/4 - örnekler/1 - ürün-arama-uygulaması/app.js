//? Ürün Arama Uygulaması

let urun = {
    marka: "Acer N1",
    kategori: "teknoloji",
    Fiyati: "7000",
}
let urun2 = {
    marka: "Acer N2",
    kategori: "teknoloji",
    Fiyati: "4400",
}
let urun3 = {
    marka: "Acer N3",
    kategori: "teknoloji",
    Fiyati: "14400",
}
let urun4 = {
    marka: "Acer N4",
    kategori: "teknoloji",
    Fiyati: "20000",
}
let urun5 = {
    marka: "Acer N5",
    kategori: "teknoloji",
    Fiyati: "5000",
}
let urun6 = {
    marka: "Acer N6",
    kategori: "teknoloji",
    Fiyati: "23400",
}
let urun7 = {
    marka: "Acer N7",
    kategori: "teknoloji",
    Fiyati: "15000",
}
let urun8 = {
    marka: "Lenova T1",
    kategori: "teknoloji",
    Fiyati: "18900",
}
let urun9 = {
    marka: "Lenova T2",
    kategori: "teknoloji",
    Fiyati: "22300",
}
let urun10 = {
    marka: "Lenova T3",
    kategori: "teknoloji",
    Fiyati: "9000",
}
let urun11 = {
    marka: "Lenova T4",
    kategori: "teknoloji",
    Fiyati: "2800",
}
let urun12 = {
    marka: "Lenova T5",
    kategori: "teknoloji",
    Fiyati: "6100",
}

let deger = prompt("Ara ");
let urunler = [urun, urun2, urun3, urun4, urun5, urun6, urun7, urun8, urun9, urun10, urun11, urun12,];
let filtreliUrunler = [];

function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.marka.toUpperCase().includes(deger.toUpperCase(), 0)){
            filtreliUrunler.push(urun);
        }
    })
}
function filtreliUrunleriYazdir(urunler){
    filtreliUrunler.forEach(function(urun){
        console.log("-------------------------------");
        console.log("|" + urun.marka + "|" + urun.Fiyati + "|" + urun.kategori);
        console.log("-------------------------------");
    })
}
filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);