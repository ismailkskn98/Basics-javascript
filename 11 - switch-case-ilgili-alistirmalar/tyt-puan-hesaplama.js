/*
    ? SORULAR
    1- Türkçe 40  - 4 puan ..
    2- Matematik 40 - 4 puan ..
    3- Sosyal Bilimler 20  - 4 puan ..
    4- Fen Bilimleri 20 - 4 puan ..
    ----------------> 100 puanı ÖSYM veriyor.
    ----------------> Okul puanı max 60 veriyor.
*/
let turkceDogru , turkceYanlis = 0;
let matematikDogru , matematikYanlis = 0;
let sosyalDogru , sosyalYanlis = 0;
let fenDogru , fenYanlis = 0;
let okulPuan = 0;
let puan = 0;

let yeniSatir = "\n";
let mesaj = "TYT Puan hesaplaması uygulamasına hoşgeldiniz!" + yeniSatir
+ "1 - Puan hesapla" + yeniSatir
+ "2 - Çıkış yap";
let secim = prompt(mesaj);

switch (secim){
    case "1":
        //puan hesaplama
        okulPuan = Number(prompt("Okul puanınızı giriniz : "));
        turkceDogru = Number(prompt("Türkçe doğru sayınızı giriniz :"));
        turkceYanlis = Number(prompt("Türkçe yanlış sayınızı giriniz :"));
        matematikDogru = Number(prompt("Matematik doğru sayınızı giriniz :"));
        matematikYanlis = Number(prompt("Matematik yanlış sayınızı giriniz :"));
        sosyalDogru = Number(prompt("Sosyal bilimler doğru sayınızı giriniz :"));
        sosyalYanlis = Number(prompt("Sosyal bilimler yanlış sayınızı giriniz :"));
        fenDogru = Number(prompt("Fen bilimler doğru sayınızı giriniz :"));
        fenYanlis = Number(prompt("Fen bilimler sayınızı giriniz :"));
        // dogrular
       let dogrular = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
       // yanlışlar 4 de bölüyoruz sonucu doğrudan çıkarıyoruz = net
       let yanlislar = (turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis) / 4;
       // sonuç (net)
        puan = (4*(dogrular - yanlislar)) + 100 + okulPuan;
        alert("Netiniz : " + puan);
        break;
    case "2":
        alert("Başarılı bir şekilde çıkış yapıldı.");
        // çıkış yapıldı
        break;
    default:
        // hatalı tuşlama
        alert("Hatalı tuşlama lütfen 1 veya 2 ' yi tuşlayınız!");
        break;
}