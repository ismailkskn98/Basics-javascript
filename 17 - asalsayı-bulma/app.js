/*
?               ASAL SAYI BULMA UYGULAMASI
32
16
*/

let sayi = Number(prompt("Lütfen bir sayı giriniz : "));
let sonuc = true;
for(let i = 2; i <= Math.floor(sayi/2); i++){
    if(sayi%i === 0){
        // asal degildir
        alert("Girdiğiniz sayı " + sayi +" asal değildir");
        sonuc = false;
        break;
    }
}
if(sonuc === true){
    // sayı asaldır
    alert("Girdiğiniz sayı " + sayi +" asaldır");
}