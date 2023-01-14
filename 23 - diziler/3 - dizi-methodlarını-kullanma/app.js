//? Dizi Methodları
//* push    : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner
//* unshift : dizinin başına eleman ekler, eleman sayısını geriye döner

//* pop     : dizinin sonundan eleman siler, sildikten sonra silinen elemanı geri dönüyor
//* shift   : Bir diziden ilk öğeyi kaldırır ve onu döndürür. Dizi boşsa, undefined döndürülür ve dizi değiştirilmez.

//* splice(index, incdex)   : eleman eklemek ve silmek için kullanılır

//* toString    : diziyi string'e çevirebiliriz
//* join        : diziyi string'e çevirir. Farkı ise araya eleman ekleyebilir

//* concat      : dizileri birleştirmek için kullanılır ve Bu yöntem, mevcut dizileri değiştirmeden yeni bir dizi döndürür.
//* slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi oluşurabilir
//* length      : dizinin uzunluğunu çevirirconsole.log(yeniUzunluk);
//* reverse     : dizinin elemanlarını ters çevirirconsole.log(yeniUzunluk);
//* split(bölmek) : belirli bir ifadeye göre bölüp diziye çevirmek
//* indexOf     : elemanın index numarasını verir
//* includes    : Bir dizinin belirli bir öğe içerip içermediğini belirler, uygun şekilde true veya false döndürür.

let arabalar = ["Bmw", "Mercedes", "Porsche", "Renault", "Tofaş"];

//? push Örnek
//* dizinin sonuna eleman eklicez ve geriye dönüyor(method)(function) ekrana yazdırcaz
// console.log(arabalar.length);
// let yeniUzunluk = arabalar.push("Opel");
// console.log(yeniUzunluk);
// console.log(arabalar);

//? unshift Örnek
//* dizinin başına eleman eklicez ve eleman sayısını yine geriye dönecek
// console.log(arabalar.length);
// let yeniUzunluk = arabalar.unshift("Opel");
// console.log(yeniUzunluk);
// console.log(arabalar);

//? pop Örnek
//* dizinin sonunda ki elemanı silicez sildikten sonra silinen elemanı geri dönüyor
// console.log(arabalar.length);
// console.log(arabalar);
// let silinenEleman = arabalar.pop();
// console.log(arabalar.length);
// console.log(silinenEleman);
// console.log(arabalar);

//? shift Örnek
//* Bir diziden ilk öğeyi kaldırır ve onu döndürür. Dizi boşsa, undefined döndürülür ve dizi değiştirilmez.
// console.log(arabalar.length);
// console.log(arabalar);
// let silinenEleman = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);
// console.log(arabalar.length);

//? splice(index, incdex) Örnek
//* istediğin herhangi bir yere eleman eklemek için
//* ve silmek için kullanılır
// console.log(arabalar);
// arabalar.splice(0,0,"Opel");
// console.log(arabalar);
//* Mercedes'ten sonra ekleme işlemi yapalım
// arabalar.splice(3,0,"Fiat");
// console.log(arabalar);
//* başta ki opeli silelim
// arabalar.splice(0,1); //* 0. index'deki elemandan başla 1 tane eleman sil
// console.log(arabalar);
//* Mercedes'ten sonra eklemediğimiz Fiat'ı silelim
// arabalar.splice(2,1); //* 2. index'e eklemiştik 2. index'i seçiyoruz kaç tane sileceğini yazıyoruz
// console.log(arabalar);
//* birden fazla değer silelim (sondan 2 tanesi)
//* silmeye soldan başlıyor sağ doğru gidiyor
// arabalar.splice(arabalar.length-2,2);
// console.log(arabalar);

//? toString Örnek
//* Array'in string halini döner
// console.log(typeof arabalar);
// console.log(arabalar);
// console.log("---------------");
// let dizininStringHali = arabalar.toString();
// console.log(dizininStringHali);
// console.log(typeof dizininStringHali);

//? join Örnek
//* arasına istediğiniz işareti koyarak string hale çevirir diziyi
// console.log(arabalar);
// let arabalarString = arabalar.join(" "); //* boşluk koydum
// console.log(arabalarString);
// let arabalarString = arabalar.join(" - "); //* tire koydum
// console.log(arabalarString);

//? concat Örnek
//* İki veya daha fazla diziyi birleştirir. Bu yöntem, mevcut dizileri değiştirmeden yeni bir dizi döndürür.
// let isimler = ["ismail","Esra","Burak"];
// let yeniDizi = arabalar.concat(isimler);
// console.log(yeniDizi);
// console.log(typeof yeniDizi);

//? slice(dilimlemek) Örnek
//*Bir dizinin bir bölümünün bir kopyasını döndürür. Hem başlangıç ​​hem de bitiş için,
//* dizinin sonundan bir kaymayı belirtmek için negatif bir dizin kullanılabilir.
//* Örneğin, -2, dizinin sondan ikinci elemanını ifade eder.
// console.log(arabalar);
//* 2. index'den başla sonuna kadar al
// let yeniDizi = arabalar.slice(2);
// console.log(arabalar);
// console.log(yeniDizi);
//* sadece mercedes ve porsche'yi alalım
// let yeniDizi2 = arabalar.slice(1,3);
// console.log(yeniDizi2);

//? length Örnek
//* Dizinin uzunluğu bulmak için
// console.log(arabalar.length);

//? reverse Örnek
//*Bir dizideki öğeleri yerinde tersine çevirir. Bu yöntem diziyi değiştirir ve aynı diziye bir başvuru döndürür.
// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar); //* dizinin sıralamasını tersine çeviriyor ve diziyi değiştirip çıktı veriyor

//? split Örnek
//* önceden atadığın değişkenin içerisini diziye çevirebiliriz. Belirtilen ayırıcıyı kullanarak bir dizeyi alt dizelere ayırın ve bunları bir dizi olarak döndürün.
// let isimler = "İsmail - Esra - Burak - Aslan";
// let yeniİsimler = isimler.split("-");
// console.log(yeniİsimler);

//? indexOf Örnek
//* elemanın index numarasını verir. Bir dizideki bir değerin ilk geçtiği dizinin dizinini veya yoksa -1'i döndürür.
// console.log(arabalar);
// let indexNumber = arabalar. indexOf("Mercedes");
// console.log(indexNumber);
//* 2. index'den aramaya başlasın mercedes'i
// let indexNumber = arabalar. indexOf("Mercedes",2);
//* Bulamayacağı için -1 döndürüyor geri
//* geriye de "number" dönüyor
// console.log(indexNumber);
//*? includes Örnek
//* Bir dizinin belirli bir öğe içerip içermediğini belirler, uygun şekilde true veya false döndürür.
let marka = "Bmw";
let index = arabalar.includes(marka);
if(index == true){
    console.log("Aradığınız değer vardır.");
}else{
    console.log("Aradığınız değer yoktur.");
}