//?         Dizi(Array) Oluşturma
//* Bir sürü elmanız var bunları sepeti koyuyoruz o şekilde taşıyoruz gibi
//* Her bir elemana "İndex" adında çağıyoruz 1. index 2. index gibi
//? Örnek dizi tanımlamaları
//* let dizi_adi = ["Enes","Kübra","Esra","İsmail"];
//? Başka dillerde tek tip değerler tutabilirsiniz sadece string gibi
//? ama javascript'e farklı tiplerde değerler tutabilirsiniz
//* let dizi_adi = [1,true,"İsmail","?",null,5.12];

//? Dizi oluşturma
//* Normalde dizi kullanmasaydık bu değerlerin hepsini ayrı ayrı
//* değişkenlere atamanız gerekiyordu.
// let sayilar = [0,1,2,3,4,5,"İsmail",7,8,9,"Ali"];

//* Yukarda tanımladığımız dizinin 6. index'ini çağıralım
// console.log(sayilar[6]);
// console.log(sayilar[8]);
// console.log(sayilar[10]);
//* 10. index'deki Ali yi sonradan değiştirme
//* Ali işten ayrıldı yerine Mehmet geldi diyelim
// sayilar[10] = "Mehmet";
// console.log(sayilar[10]);

//? Son elemanı olduğu için şu şekilde de yapılabilirdi.
// sayilar[sayilar.length-1]="Esra";
// console.log(sayilar[sayilar.length-1]);

//? Örnek
// let isimler = ["İsmail","Esra","Bilge","Bilal"];
// console.log(isimler[2]);
// //* Bilge'yi sinem yapalım
// isimler[2] = "Sinem";
// console.log(isimler[2]);

//? Dizi oluşturma
// let dizi1 = [];
// let dizi2 = new Array();
//* Üstte boş 2 tane dizi var ikisini de aynı istersen üsteki gibi istersen altta ki gibi oluturabilirsin
//? Dizi oluşturma
let dizi1 = ["ismail", 23, "Keskin", undefined, null];
let dizi2 = new Array("ismail", 23, "Keskin", undefined, null);

//*sonradan değer eklemek için ise
dizi1[5] = "Mustafa";
//*en sona değer eklemek için
dizi1[dizi1.length] = "Sercan";
console.log(dizi1[6]);
//* new array de aynı şekilde ekleyebiliyorsun