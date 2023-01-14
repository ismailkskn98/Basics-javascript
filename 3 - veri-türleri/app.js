/* 
? Veri Tipleri

* 1 - String > "" tırnaklar arasına yazılan herşey
* 2 - Number > sayi 10 , 10.4 gibi
* 3 - Boolean > true , false
* 4 - Null > boş
* 5 - Undefined > tanımlanmamış
* 6 - Object
* 7 - Function
* tibini öğrenmek için "typeof" kullanılır.
console.log(typeof sayi);
*/


//* ------------------Object---------------------

let insan ={
    isim : "Enes",
    soyisim : "Bayram",
    yas : 23
}
console.log(insan);

let rakamlar = [1,2,3,4,5];
console.log(typeof rakamlar);
//* ------------------Fonction---------------------

let func = function(){
    console.log("Merhaba");
}
func();
console.log(typeof func);