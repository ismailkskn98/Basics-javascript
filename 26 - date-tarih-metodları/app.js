//? Date (Tarih) Methodları
//* Window objesi içerisine tanımlanmıs

//* güncel tarih ve saat gösterir
let tarih = new Date();
// console.log(tarih);
//* kendinde değer atayabiliyorsun
let tarih2 = new Date(1998,01,23,17,30);
console.log(tarih2);
//* tarihin yılını bana getir
console.log(tarih.getFullYear());
//* ayın kaçıncı günü
console.log(tarih.getDate());
//* haftanın kaçıncı günü
console.log(tarih.getDay());
//* sadece saat'i alma
console.log(tarih.getHours());
//* sadece milisaniye'yi
console.log(tarih.getMilliseconds());
//* sadece dakikayı veriyor
console.log(tarih.getMinutes());
//* ayı veriyor (Burda aylar 0 dan başlıyor)
console.log(tarih.getMonth());
//* sadece saniye'yi alırız
console.log(tarih.getSeconds());
//* tarihi gün/ay/yıl olarak alma
console.log(tarih.toLocaleDateString());
//* tarihi saat/dakika/saniye olarak alma
console.log(tarih.toLocaleTimeString());
//* ikisinin birleşimi 
console.log(tarih.toLocaleString());

console.log("--------------------------");

//? SET METHODLARI
//* ata demek yeni bir değer ata

//* günü değişirelim
// console.log(tarih);
// tarih.setDate(24);
//* saati değiştirelim
// tarih.setHours(20);
// console.log(tarih);

//TODO alternatif (daha iyisi)
tarih.setHours(tarih.getHours()+6);
console.log(tarih);




