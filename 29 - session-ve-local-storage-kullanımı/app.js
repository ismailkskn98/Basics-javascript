//? Session ve Local Storage Kullanımı
//* Application bölümünde Storage bölümü var
//* Key ve Value bölümleri vardır
//* Key anahtarları tanımladığımız yer
//* Value ise değerleri tanımladığımız yer
//? Örneğin
//* Key Bölümünde TC Kimlik numarası
//* Karşısında Value bölümünde o kişinin bilgileri
//* Tarayıcının depolama alanıdır
//? Session ile Local Storage arasındaki fark
//* Session Storage tarayıcıyı kapattığınızda, sekmeyi kapatıp yeni bir sekme açtığınızda veya bilgisayarı kapatıp açtığınızda Session Storage'e eklemiş olduğunuz değerler silinir
//!---
//* Local Storage ise tarayıcıyı hatta bilgisayarı kapattığınızda bile eklediğiniz değerler silinmez
//* daha çok local kullanılır ama session da gerekli oluyor bazen
//* İkiside "Window" objesinin içerisindedir.
//* Session veya Local Storage'e Key'de Value'de giren çıkan hep string tipinde oluyor
//?  Session Storage

//* Değer Ekleme
//* (key, value)
// sessionStorage.setItem("350","İsmail");
// sessionStorage.setItem("216","Yasin");
// sessionStorage.setItem("135","Erkan");

//* Değer Silme (key)
//* yasini silelim
// sessionStorage.removeItem(216);

//* Değer alma
//* erkanı çekelim (yoksa null dönüyor)
// let value = sessionStorage.getItem(135);
// if (value === null) {
//         console.log("Değer bulunamadı.");
// }else{
//     console.log("Değer bulundu : " + value);
// }

//* Hepsini Silme
// sessionStorage.clear();

//* Session Storage - Array Yazdırma
// let names = ["İsmail", "Esra", "Gizem","Burak","Hasan"];
// sessionStorage.setItem("Names", names);

//* Biz ona array verdik o bize string verdi

// let value = sessionStorage.getItem("Names");
// console.log(value);
// console.log(typeof value);

//* Bunu array olarak şöyle alabiliriz
//* JSON.stringify : elimizdeki array'i sanki bir arraymiş gibi buraya yazdırmayı sağlayan bir method'dur.
// let names = ["İsmail", "Esra", "Gizem","Burak","Hasan"];
// sessionStorage.setItem("Names", JSON.stringify(names));

// //* array'miş gibi alabilmek için 
// //* JSON.parse() methodunu kullanıyoruz
// let value =JSON.parse(sessionStorage.getItem("Names"));

// value.forEach(function(name){
//     console.log(name);
//     console.log("----------");
// });

// console.log(value);
// console.log(typeof value);

//? Local Storage
//* Kullanımı Session Storage ile tamamen aynı

//* Değer Ekleme
// localStorage.setItem("39231344674", "Mertcan Topçu");
// localStorage.setItem("57231354671", "Mustafa Bilen");
// localStorage.setItem("45613446712", "Berkay Ünal");
// localStorage.setItem("63233456436", "Esra Kurnaz");

//* Değer Alma
// let value = localStorage.getItem("57231354671");
// console.log(value);

//* Değer Silme
// localStorage.removeItem("57231354671");

//* Tümü Silme
localStorage.clear();

//* Bir dizi oluşturalım
let rakamlar = [1,2,3,4,5,6,7,8,9];

//* Diziyi LocalStorage'e ekleyelim
// localStorage.setItem("Rakamlar",rakamlar);
//* düz string olarak ekledi

//* Diziymiş gibi ekleyelim
localStorage.setItem("Rakamlar", JSON.stringify(rakamlar));

//* arraymiş gibi console çekelim
let value = JSON.parse(localStorage.getItem("Rakamlar"));
// console.log(value);
// console.log(typeof value);

//* forEach kullanarak üzerinde dönebiliriz

value.forEach(function(rakam){
    console.log("|" + rakam  + "|");
    console.log("--------");
});