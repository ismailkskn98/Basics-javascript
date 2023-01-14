//* MANTIKSAL OPERATÖRLER

/*

*    && : ve    > (Birden çok koşul vardır ve hepsini sağlaması gerekiyordur.)
*    || : veya
*    !  : değil

*/

//* Yaşınız 18' den büyükse VE 3000 TL para olması VE sağlığınız yerindeyse

let yas = 20;
let para = 3500;
let saglikliMi = false;

console.log(yas>18 && para>3000 && saglikliMi==true);

//* || , veya
console.log(yas > 18 && para>3000 || saglikliMi==true);

console.log(5>3 || 10<11);

//* ! , değil (bir şeyin zıttını almak için kullanılır)
console.log(!(5>3)); //* normalde true ama ünlem koyunca başına zıttını alır (false)
