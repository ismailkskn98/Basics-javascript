// ? Break - Continue kullanımı
//* döngülerde kullanılan 2 anahtar kelimedir ikisi birbirinden farklıdır.

//? Örnek ( break )
//* break = döngüden çıkmak için kullanılan bir anahtardır.
//* 1 den 10 a kadar sayıları yazdıralım 8 e geldiğinde döngüden çıkalım

// for(let i = 0; i <= 50; i++){
//     console.log(i);
//     if (i === 40) {
//         break;
//     }
// }

//? Örnek ( continue )
//* continue = döngüyü sadece 1 kere mahsus kırıyor (break tamamen kırıyor.)
//* 1 2 3 4 5 6 7 sekizi yazmıcaz 9 10 yazdırıcaz.
let sayac = 0;
while(sayac <= 10){
    sayac ++;
    if (sayac > 10) {
        break
    }
    if (sayac === 8) {
        continue;
    }
    console.log(sayac);
}

//* continue olan if ' e girdikten sonra while kendi süslü parantezine kadar olan
//* kodların hiçbirini çalıştırmaz 1 kereye mahsus