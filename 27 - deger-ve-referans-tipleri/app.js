//? Değer ve Referans Tipleri
// ! ÇOK ÖNEMLİ KONU


/*
? Değer Tipli
* İlkel (Primitive) Veri Türleri :
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
*/
//? Örnek
//* Aslında burda şunu yapıyoruz a da olan değeri b ye koy bırak a ile hiç bir ilişkin yok  b de yapılan yüzlerde değişiklik a yı hiç bir şekil de etkilemez
//* Üstte ki bütün veri tipleri birbirlerine değer verdiğinde sadece olan değeri verir birbirleriyle hiçbir ilişkisi bağı olmaz.
let a = 7;
let b = a;
console.log(a);
console.log(b);
b = 10;
console.log(a);
console.log(b);

console.log("--------------------");

/*
? İlkel olmayan (Reference) Veri Tipleri
- Object
- Array
- Function
*/
//? Örnek
let dizi = [1,2,3];
let dizi2 = [1,2,3];
//* Eşit değildir çıkmasının sebebi ikiside farklı kutulara bakması
//* Burda karşılaştırdığı şey içersinde ki değerler değil baktıpları kutu aynı yere bakmıyolar ikisi farklı kutulara bakıyor.
if(dizi == dizi2){
    console.log("Eşittir.");
}else{
    console.log("Eşit değildir.");
}

//? Örnek aynı yere baktıralım ve değer atayalım diğerinin değeri de değişiyor
//* Burda ise "diziDeneme" deki değeri "diziDeneme2" ye bırak demiyoruz direkt "diziDeneme2" ve "diziDeneme" aynı kutuya sahip ikisi de aynı kutuyu temsil ediyor
//* İki insan aynı ağaça bakıyor gibi düşünebiliriz
//* aynı kuş sayısını görürüz
// lkaşszfgklasd
let diziDeneme = [1,2,3];
let diziDeneme2 = diziDeneme;

diziDeneme2.push(4);
console.log(diziDeneme);
console.log(diziDeneme2);