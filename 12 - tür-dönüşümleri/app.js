/*

    ***************** TÜR DÖNÜŞÜMLERİ *******************
    * strings, numbers, booleans, undefined, and null.
    * object, function
*/

// * String veri tipinden number veri tipine dönüştürme
// let a = 5;
// let b = "10";

// let c = Number(b);
// console.log(typeof c);
// console.log(a+c);

// ? 2. yol olarak  parseInt() window objesinin içindedir.
// ! noktadan sonrasını atıyor 12.3  sadece 12 yı yazdırıyor
// ? parseFloat ise direkt kendisini yazdırıyor number() gibi

// let a = 8;
// let b = parseInt("12");
// console.log(a+b);


// * Number tipinden string veri tipine dönüştürmek

// let x = String(55);
// TODO üstte ki ile altta ki aynı çıktığı verir
let x = (55).toString();

console.log(x);
console.log(typeof x);
