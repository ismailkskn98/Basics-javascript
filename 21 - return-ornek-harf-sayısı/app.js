//? Kelime sayısı Bulma Uygulaması
//* toLowerCase() harfi küçük harfe çevirme
//? Örnek

// let metin = "Şuanda Ankara'da javascript öğreniyorum.";
// let harf = prompt("Lütfen bir harf giriniz.");
// let sonuc = harfBul(harf);

// function harfBul(harf){
//     let toplam = 0;
//     for(let i = 0; i < metin.length; i++){
//         if(metin.charAt(i).toLowerCase() === harf.toLowerCase()){
//             toplam += 1;
//         }
//     }
//     return toplam;
// }
// alert("Sonuç : " + sonuc);

//? Örnek

let metin = "Şuanda Ankara'da javascript öğreniyorum.";

function harfBul(harf){
    let toplam = 0;
    for(let i = 0; i < metin.length; i++){
        if(metin.charAt(i).toLowerCase() === harf.toLowerCase()){
            toplam += 1;
        }
    }
    console.log("Harf sayısı : " + toplam);
}
harfBul("a");
