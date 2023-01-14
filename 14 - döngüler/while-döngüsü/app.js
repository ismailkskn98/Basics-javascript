/*
 ?                      While Döngüsü           
 * 
 *                  while( Koşul ){
 *                  
 *                  //Kodlar
 *              
 *               //sayacın değerini atarız
 *              }
 * 
 */

//? Örnek
//* 1 den 10 a kadar yazdıralım
//* for gibi içerde değişken tanımlama olmadığı için dışardan tanımlıyoruz genelde "sayac" verilir.
// let sayac = 1;
// while(sayac <= 10){
//     console.log(sayac);
    
//     sayac ++;
// }

//? Örnek
//* 1 den 10 a kadar çiftleri ve tekleri yazdıralım

//* çiftler
// let sayac = 0;
// while(sayac <= 10){
//     console.log(sayac);

//     sayac += 2;
// }

//? alternatif
// let sayac = 0;
// while(sayac <= 10){
//     if(sayac%2 == 0){
//         console.log(sayac);
//     }
//     sayac ++;
// }

//* tekler
// let sayac = 1;
// while(sayac <= 10){
//     console.log(sayac);

//     sayac += 2;
// }

//? Örnek
//* while true döngüsü ile 1 den 10 a kadar yazdıralım ama 7 de dursun
//* while true aslında sonsuz bir döngüdür.
// let sayac = 1;
// while(true){
//     console.log(sayac);
//     if(sayac === 7){
//         break;
//     }
//     sayac ++;
// }