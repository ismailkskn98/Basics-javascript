//* document.write ile çıktı verme

document.write("Hello World </br>");
document.write("İsmail Keskin");
document.write(55);
document.write(true);

//* console.log metodu console kısmında çalışır ekrana yazı gelmez

console.log("Hello World");
console.log("İsmail Keskin");
// console.clear();
let a = 5;
let b = 10;

console.log("İki sayının toplamı :", a+b);
console.log("İki sayının toplamı :" + (a+b));

//* Alert (Uyarı) popup ile çıktı verme işlemleri
//* window sitemizin en dış çerçevedir
//* window dan sonra ki en büyük obje document ' dır.

//console.log(window.alert);

alert("İki sayının toplamı : " + (a+b));


// YORUM SATIRLARI

/*
    ? Bu bir bilgilendirme mesajıdır.
    ! Burası kesin düzeltilmeli dikkat et.
    TODO : burda yapılacakları not edelim.
    * Bu genelde info için kullanılır.
*/
