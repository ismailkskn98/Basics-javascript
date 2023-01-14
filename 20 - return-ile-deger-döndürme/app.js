//? Return İle Geriye Değer Döndürme Metodu Tanumlamak
//* Örnekler üzerinde anlatım olacak

//? Örnek
//* Bir sayının küpünü alalım ve küpünü aldığımız değeri geriye döndürelim
//* Methodun içinde oluşturduğun değerleri dışarıda da erişebilmek için " return " ile yapıyoruz.
//* methodun çağırıldığı yere döndürecek
//* return anahtar kelimesinden sonraki hiç bir kod çalışmaz. 
//* geriye değer döndürmeyen metodlara "void" diyoruz.

// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
// TODO aslında burda çalışacak : console.log(sonuc);
// }
// cube(10);
// TODO burda ki kod : console.log(sonuc);

//? üstte ki kodun return ile değeri dışarıda çalıştırcaz
debugger;
let donenDeger = cube(3);
kare(donenDeger);
//* cubedeki (sayi) ile karedeki (sayi) tamamen farklıdır içine tanımladığın değişkenlerde öyle 
function kare(sayi){
    debugger;
    let sonuc = sayi*sayi;
    console.log(sonuc);
}

function cube(sayi){
    debugger;
    let sonuc = sayi*sayi*sayi;
    return sonuc;  //* return burda sonuc ' u geriye döndürecek peki nereye döndürecek
                   //* methodun çağırıldığı yere döndürecek
    console.log("İsmail"); //* return anahtar kelimesinden sonraki hiç bir kod çalışmaz. 
}
