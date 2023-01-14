//? Mükemmel Sayı Uygulaması
//* 6 - 28 - 496
/*
 * 
 * 6    >   1,2,3,6  bölenlerinin toplamı : 12  == 6*2 bu mükemmel sayı oluyor
 * 28   >   1,2,4,7,14,28
 * sayı 1 e ve kendisine her türlü bölünüyor
 * sayı yarısından sonrasına zaten tam bölünemez
 */
let sayi = Number(prompt("Lütfen bir sayı giriniz : "));

function mukemmelSayi(sayi){
    let toplam = sayi;
    for(let i = 1; i <= (sayi/2); i++){
        if(sayi%i === 0){
            toplam += i;
        }
    }
    if(toplam === (sayi*2)){
        alert("Girdiğiniz " + sayi + " Mükemmel sayıdır.");
    }
}
mukemmelSayi(sayi);