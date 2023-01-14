//? FOREACH DÖNGÜSÜ
//* Dizilerde kullanıyoruz.
//* Diğer döngüleri de kullanabilirsin fakat fereach dizi içindir.
//* Dizilerde döngü kullanıcaksanız foreach kullanacaksınız.

//? Örnek
//* Bir dizi oluşturalım içinde isimleri tutsun ve bunları alt alta yazdıralım
let isimler = ["İsmail","Kahraman","Mustafa","Bilge","Esra"];

//* ilk for kullanarak yapalım
console.log("Bu for ile yapılan");
for(let i = 0; i <= (isimler.length-1); i++){
    console.log(isimler[i]);
}
console.log("-----------------");

//*ikinci olarak while kullarak yapalım
console.log("Bu while ile yapılan");
let sayac = 0;
while(sayac < isimler.length){
    console.log(isimler[sayac]);
    sayac ++;
}
console.log("-----------------");
console.log("Bu foreach ile yapılan");
//* Şimdi foreach kullanarak yapalım
isimler.forEach(function(isim){
    console.log(isim);
});

