/*

?                       FOR DÖNGÜSÜ

*               for( degisken ; koşul ; arttırma - azaltma ){

*                   // kodlar
*               }

?   Örnek

*   for(let i = 1; i <= 10; i++){
*   console.log(i);
}


*/

//? Örnek
//* birden ona kadar yazdıralım
// for(let i = 1; i <= 10; i++){
//     console.log(i + " ismail keskin");
// }

//? Örnek
//* birden ona kadar çift sayıları yazdıralım ( i = i + 2 ) = i += 2
// for (let i = 0; i <= 10; i+=2){
//     console.log(i);
// }

//? Örnek
//* birden ona kadar tek sayıları yazdıralım
// for(let i = 1; i <= 10; i+=2){
//     console.log(i + " İsmail Keskin");
// }

//? Örnek
/*
! modunu alıyoruz
 * İsmail 
 * Naber
 * İsmail
 * Naber
 */
// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 1){
//         console.log(i + " İsmail");
//     }else{
//         console.log(i + " Naber");
//     }
// }

//? Örnek
//* 50 den 1' e kadar gitsin ve toplamlarını bulalım
let toplam = 0;
for(let i = 50; i >= 1; i--){
    toplam += i;
    console.log(i);
}   
console.log("Toplam : " + toplam);