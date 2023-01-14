//? Events(Olaylar) Nasıl Kullanılır ?
//* Html Elementlerinin içinden erişebiliyoruz
//* attribute'ler gibi erişilebilir

//? Örneğin buttona tıklandığında alert olarak merhaba yazsın
/*
<a href="#" onclick = "alert('Merhaba')" 
id="clearButton"  class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>
*/

//* onclick : tıklandığında
//* this : bu buttonun veya şuan üzerinde çalıştığım html element'in

//? Örneğin buttona tıklandığında buttonun içeriği değişsin
/*
<a href="#" onclick = "this.textContent = 'Temizlendi'" 
id="clearButton"  class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>
*/

//? Örneğin buttona tıklandığında "Todo Listesi" başlığı değiştirelim
/*
<a href="#" onclick = "document.querySelectorAll('.card-title')[1].textContent = 'Değişti'"
id="clearButton"  class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>
*/

//? Bu şekilde de kullanılabilir ama html sayfan çorba olur

//! -------------------------------------------------

//? Bu şekilde de kullanılabilir
//* onclick yapıldığında şu methodu çalıştır dicez
//? Örnek changeTitle()
/*
<a href="#" onclick = "changeTitle()"
id="clearButton"  class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>
*/

// function changeTitle(){
//     const title2 = document.querySelectorAll(".card-title")[1];
//     title2.innerHTML = "Todo Listesi (Yenilendi)";
// }

//* veya html sayfasında nasıl yazılıyosa aynısını burda yazabilirsin

// function changeTitle(){
//     document.querySelectorAll(".card-title")[1].textContent = "Todo Listesi (Yenilendi)";
// }

//! -----------------------------------------------

//? Daha modüler bir şekilde daha esnek daha güzel kullanmak için
//* bu şekilde kullanıcaz
//* addEventListener() diye bir method var

//? örnek
//* buttonu seçelim

const clearButton = document.querySelector("#clearButton");

//* birinci parametresinde sizden event'ın ismini istiyor cinsini tipini html de "onclick" ama burda "click" olarak yazılıyor
//* ikincisinde methodu yazıyosunuz ismini veriyosunuz
// clearButton.addEventListener("click", function(){
//     alert("İşlem başarılı");
// });

//!-------------------------------------------
//* daha da güzeli function'nu dışarda tanımlamak
//* En çok bu şekilde yapıcaz

// function clear(){
//    document.querySelectorAll(".card-title")[1].textContent = "Bağlık Değişti";
// }
// clearButton.addEventListener("click",clear);

//*
// clearButton.addEventListener("click", clear);

// function clear(e){
//     console.log(e);
// }

//* mesela type event'ı kullanmış olduğun event'ın tipini veriyor
// function clear(e){
//     console.log(e.type);
// }

//* mesela target event'ın çalışmış olduğu html element'ni bize veriyor
// function clear(e){
//     console.log(e.target);
// }

//* text'ini değiştirelim
// function clear(e){
//     console.log(e.target.textContent = "target kullanarak değiştirildi");
// }

const form = document.querySelector("#todoAddForm");
form.addEventListener("submit",temizle);

function temizle(e){
    console.log(e);
};