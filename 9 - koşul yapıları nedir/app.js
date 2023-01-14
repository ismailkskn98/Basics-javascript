/*

            * KOŞUL YAPILARI

    * if ( Koşul ) {

        ? kodlar

    *}
    * else {
    
        ? kodlar
    
    * }
*/

// ? Örnek

// let not = 45;

// if(not>50){
//     console.log("Geçtiniz , notunuz :" + not);
// }
// else {
//     console.log("Kaldınız , notunuz :" + not);
// }

// ? Örnek

// let yas = Number(prompt("Yaşınız :"));
// let para = Number(prompt("Paranız ne kadar ?"));
// if(yas >= 18 && para >= 3000){
//     console.log("Yaşınız : " + yas + " ve paranız : " + para + " olduğundan dolayı ehliyet alabilirsiniz.");
// }
// else if(yas >= 18 && para < 3000) {

//         console.log("Yaşınız : " + yas + " koşulu sağlıyor fakat, paranız : " + para + " olduğundan dolayı ehliyet alamazsınız.");
//     }
// else if(yas < 18 && para >= 3000) {

//         console.log("Paranız : " + para + " koşulu sağlıyor fakat, yaşınız : " + yas + " olduğundan dolayı ehliyet alamazsınız.");
//     }
// else{
//     console.log("Paranız : " + para + " ve yaşınız : " + yas + " olduğundan dolayı ehliyet alamazsınız.");
// }

//* Else if yapısı

// ? Örnek


// let secilenyol = prompt("Lütfen gitmek istediğiniz yolu seçiniz : ");

// if(secilenyol == 1){
//     alert("Seçilen yol " + secilenyol + ". yoldur.");
// }
// else if (secilenyol == 2){
//     alert("Seçilen yol " + secilenyol + ". yoldur.");
// }
// else if (secilenyol == 3){
//     alert("Seçilen yol " + secilenyol + ". yoldur.");
// }
// else{
//     alert("Lütfen 1. , 2. veya 3. yollardan birini seçiniz !");
// }


//* Birden fazla if kullanmak

/*
        * if( koşul ){

        * }
        * if( koşul ){

        * }
        * if( koşul ){

        * }
        *
        *
*/

// ? Örnek

/*
 *  adını ve tckn istenecek
 *  AD : boş geçilemez
 *  TCKN : 11 karakterden oluşsun
 * length > karakter sayısını alır
 */

let ad = prompt("Lütfen adınızı giriniz : ");
let tckn = prompt("Lütfen 11 karakterli tckn giriniz :");

// kontrolEt(ad , tckn);
    kontrolEt2(ad , tckn);
function kontrolEt(ad , tckn) {
    if(ad !=""){ // eğer ad boş değilse if'e giricek boş ise else girecek
        if(tckn.length == 11){  // ad koşulundan geçerse bu koşula bakılacak bu koşuldan geçerse içeriği çalışacak

            console.log("İsim ve tckn problemsiz girildi.");

        }
        else{
            console.log("Lütfen 11 haneli tckn giriniz.");
        }
    }
    else{
        console.log("Lütfen isim alanını boş bırakmayınız.");
    }
}

// 2.si

function kontrolEt2(ad , tckn){
    if(ad == ""){
        console.log("Lütfen isim alanını boş bırakmayınız.");
        return;
    }
    if(tckn.length !== 11){
        console.log("Lütfen 11 haneli tckn giriniz.");
        return;
    }
    else{
        console.log("İsim ve tckn problemsiz girildi.");
    }
}