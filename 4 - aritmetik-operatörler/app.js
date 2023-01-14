//* ARİTMETİK OPERATÖRLER

/*
 * =   ---> atama operatörü //!önemli
 * +   ---> toplama , birleştirme
 * -   ---> çıkarma
 * /   ---> bölme
 * %   ---> mod alma operatörü
 * ++  ---> 1 arttırmak için kullanılır.
 * --  ---> 1 azaltmak için kullanılır.
 * **  ---> bir sayının üssünü almak için kullanılır.

*/

//* string + number  bu ikisi birleşmiş olur >>> stringnumber
let isim = "İsmail";
let sayi3 = 5;
console.log(isim + sayi3)
//*------------------------------------------
let sayi = 60;
let sayi2 = 52;
console.log( "Notlarınızın Toplamı : " + (sayi + sayi2));

//* %   ---> mod alma operatörü
/*
 * 10 / 3 = 1  >>> burda ki 1 'i bulmak için kullanırız.
 * 12 / 5 = 2  >>> burda li 2 'yi bulmak için kullanırız.
*/
console.log(sayi2 % sayi3);

//* ++  ---> 1 arttırmak için kullanılır.
//* --  ---> 1 azaltmak için kullanılır.
sayi ++;
sayi ++;
sayi --;
console.log(sayi);

//* **  ---> bir sayının üssünü almak için kullanılır.
console.log(2**3);
console.log(sayi**sayi2);