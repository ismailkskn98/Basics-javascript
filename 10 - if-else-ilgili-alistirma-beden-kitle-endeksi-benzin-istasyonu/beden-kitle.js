//* Beden kitle Endeksi Hesaplama

/*
 * Vucüt ağırlının boy uzunluğunun karesine bölünmesiyle (kg/m'2) hesaplanır.
 * Kullanıcıdan kilosu ve boy uzunluğu istenecek
 * sonuç 18,5 (kg/m'2) altında ki sonuçlar : ideal kilonun altındadır.
 * sonuç 18,5 (kg/m'2) ile 24,9 (kg/m'2) arasındaki sonuçlar : ideal kilodadır.
 * sonuç 25 (kg/m'2) ile 29,9 (kg/m'2) arasındaki sonuçları : ideal kilonun üstündedir.
 * sonuç 30 (kg/m'2) ile 39,9 (kg/m'2) arasındaki sonuçlar : ideal kilonun çok üstündedir. (obez)
 * sonuç 40 (kg/m'2) üzerindeki sonuçlar : deal kilonun çok üstündedir. (morbid obez)
 */

let kilo = Number(prompt("Kilonuzu giriniz :")); 
let boy = Number( prompt("Boyunuzu metre cinsinden giriniz :"));
let indeks = kilo / (boy**2);
if(indeks < 18.5){
    console.log("İndeksiniz : " + indeks + " İdeal kilonun altındadır.");
}
else if(indeks >= 18.5 && indeks <= 24.9){
    console.log("İndeksiniz : " + indeks + " İdeal kilodadır.");
}
else if(indeks >= 25 && indeks <= 29.9){
    console.log("İndeksiniz : " + indeks + " İdeal kilonun üstündedir.");
}
else if(indeks >= 30 && indeks <= 39.9){
    console.log("İndeksiniz : " + indeks + " İdeal kilonun çok üstündedir. (obez)");
}
else{
    console.log("İndeksiniz : " + indeks + " İdeal kilonun çok üstündedir. (morbid obez)");
}