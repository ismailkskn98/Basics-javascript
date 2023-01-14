//* Var - Let - Const 

/*
    *var/let/const DeğişkeninAdı = DeğişkeninDeğeri;
*/
//*  var  function scope -- ram bellekte çok fazla yer kaplar.
function selamVer() {
    var selam = "Herkese Selam"; //* function scope
    if (true) {
        var b = 10; //* Bu aslında block scope ama "var" ile tanımlandığı için function scope gibi davranıyor.
    }
    console.log(b);
    console.log(selam);
}
selamVer();

//* let/const : block scope özelliğine sahiptir.
function selamVer2() {
    var selam = "Herkese Selam"; //* function scope
    if (true) {
        let b = 15; //* let/const ile tanımladığım mor süslü parantez dışında çalışmaz (block scope)
        console.log(b);
    }
    console.log(selam);
}
selamVer2();

//* var ile tanımladığın değişkenin içeriğini sonradan değiştirebilirsin
var a = 10;
var a = 20;
console.log(a);

//* let/const ile tanımladığın değişkeni sonradan değiştiremezsin

// let b = 30;
// let b = 40;
// console.log(b);

//* Let & Const arasındaki fark nedir ?

let sayi = 7;
sayi = 10;
console.log(sayi);
//* const (constant) sabit/değişmez
const sayi2 = 20;
sayi2 = 30;
console.log(sayi2);