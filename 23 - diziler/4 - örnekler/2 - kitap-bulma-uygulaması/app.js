//? Kitap Bulma Uygulaması
// kullanıcan değeri çekelim
let deger = prompt("Lütfen aramak istediğiniz kitap ismini giriniz");
// kitapların özellikleri
let kitap = {ad : "Lolita", yazar : "Vladimir Nabokov", fiyatı : 25, kod : "1.2.RAF"};
let kitap2 = {ad : "Muhteşem Gatsby", yazar : "F. Scott Fitzgerald", fiyatı : 13, kod : "2.4.RAF"};
let kitap3 = {ad : "Kayıp Zamanın İzinde", yazar : "Marcel Proust", fiyatı : 35, kod : "3.4.RAF"};
let kitap4 = {ad : "Ulysse", yazar : " James Joyc", fiyatı : 62, kod : "4.5.RAF"};
let kitap5 = {ad : "Dublinliler", yazar : "James Joyce", fiyatı : 31, kod : "5.5.RAF"};

// kitaplar
let kitaplar = [kitap, kitap2, kitap3, kitap4, kitap5];

//1.raf
let raf11 = {kod : "1.1.RAF", goster : false};
let raf12 = {kod : "1.2.RAF", goster : false};
let raf13 = {kod : "1.3.RAF", goster : false};
let raf14 = {kod : "1.4.RAF", goster : false};
let raf15 = {kod : "1.5.RAF", goster : false};
//2.raf
let raf21 = {kod : "2.1.RAF", goster : false};
let raf22 = {kod : "2.2.RAF", goster : false};
let raf23 = {kod : "2.3.RAF", goster : false};
let raf24 = {kod : "2.4.RAF", goster : false};
let raf25 = {kod : "2.5.RAF", goster : false};
//3.raf
let raf31 = {kod : "3.1.RAF", goster : false};
let raf32 = {kod : "3.2.RAF", goster : false};
let raf33 = {kod : "3.3.RAF", goster : false};
let raf34 = {kod : "3.4.RAF", goster : false};
let raf35 = {kod : "3.5.RAF", goster : false};
//4.raf
let raf41 = {kod : "4.1.RAF", goster : false};
let raf42 = {kod : "4.2.RAF", goster : false};
let raf43 = {kod : "4.3.RAF", goster : false};
let raf44 = {kod : "4.4.RAF", goster : false};
let raf45 = {kod : "4.5.RAF", goster : false};
//5.raf
let raf51 = {kod : "5.1.RAF", goster : false};
let raf52 = {kod : "5.2.RAF", goster : false};
let raf53 = {kod : "5.3.RAF", goster : false};
let raf54 = {kod : "5.4.RAF", goster : false};
let raf55 = {kod : "5.5.RAF", goster : false};

//Raflar
let raflar = [[raf51,raf52,raf53,raf54,raf55],
[raf41,raf42,raf43,raf44,raf45],
[raf31,raf32,raf33,raf34,raf35],
[raf21,raf22,raf23,raf24,raf25],
[raf11,raf12,raf13,raf14,raf15]];


function rafOlustur(){
    console.clear();
    let satir = "";
    for(let i = 0; i < raflar.length; i++){
        for(let j = 0; j < 5; j++){
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---");
        }
        console.log(satir);
        console.log("--------------------");
        satir = "";
    }
}
rafOlustur();

function kodBul(kitapIsmi){
    let rafKod = null;
    kitaplar.forEach(function(kitap){
        if(kitap.ad.toUpperCase().includes(kitapIsmi.toUpperCase()),0){
            rafKod = kitap.kod;
        }
    });
    return rafKod;
}

function raftaGoster(rafKodu){
    for(let i = 0; i < raflar.length; i++){
        for(let j = 0; j < 5; j++){
            if(raflar[i][j].kod == rafKodu){
                raflar[i][j].goster = true;
                break; 
            }
        }
    }
}
let rafKod = kodBul(deger);

if( rafKod != null){
    raftaGoster(rafKod);
    rafOlustur();
}else{
    alert("Girdiğiniz kitap kütüphanede yoktur.");
}