/*
?               DO WHİLE DÖNGÜSÜ              
 *          
 *              do{
 *  
 *              //Kodlar
 * 
 *          }while( Koşul );
 * 
 * Derleyici yukardan aşağıya doğru çalıştığı için
 * içerde ki kodlarınız en az 1 kere çalışır
 * while ile tek farkı budur
 */

//? Örnek
//* 1 den 10 a kadar yazdıralım
let sayac = 1;
do{
    console.log(sayac);
    sayac ++;
}while(sayac <= 10);
console.log("Burdan devam ediyor..");