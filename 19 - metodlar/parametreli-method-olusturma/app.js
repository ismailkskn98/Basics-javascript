//?    Paramatreli ve geriye değer döndürmeyen method tanımlamak
//!    Çok çok önemli konu
//*    geriye değer döndürmeyen metodlara "void" diyoruz.
/*
 *       function isim(parametre,parametre,parametre){
            //Kodlar
 *       }
 * 
 */

//? Örnek
// function yazdir(isim,soyisim){
//     console.log(isim + " " + soyisim);
// }
//* hangi değerleri veriyorsan oluşturduğun function (method) verdiğin
//* değerlere hizmet eder
// yazdir("İsmail","Keskin");
// yazdir("Ali","Cevher");

//? Örnek
//* Bir sayının küpünü alan method yapalım

// sayiKupu(5);

// function sayiKupu(sayi){
//     console.log(sayi*sayi*sayi);
// }

//? Örnek
//* kullanıcan değer alıp yaşının 18 den büyük ise ehliyet alabilir veya alamaz

let yas = Number(prompt("Lütfen yaşınızı giriniz : "));

function ehliyetTest(test){
    if (yas >= 18) {
        alert("Ehliyet alabilirsin.");
    }else{
        alert("Ehliyet alamazsın.");
    }
}
ehliyetTest(yas);