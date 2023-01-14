//? Maus Events

//* DomContentLoaded : Sayfa yüklendiğinde çalışacak
// document.addEventListener("DOMContentLoaded",sayfaYukle);
// function sayfaYukle(){
//     alert("Hoşgeldiniz..");
// }

//* load : window objesi üzerinden sayfa yüklendiğinde çalışacak
// window.addEventListener("load",sayfaYukle);
// function sayfaYukle(){
//     alert("Hoşgeldiniz..");
// }

//* click
//* tek click
// const title2 = document.querySelectorAll(".card-title")[1];
// title2.addEventListener("click",run);
// function run(e){
//     console.log(e.target.textContent = "Değişti");
// }

//* dblclick
//* çift click
// const title2 = document.querySelectorAll(".card-title")[1];
// title2.addEventListener("dblclick",run);
// function run(e){
//     console.log(e.target.textContent = "Değişti");
// }

//* mouseover
//* html etiketi üzerine gelince çalışır alt etiketlerinin üzerlerine gelince bi daha çalışır
// const cardBody2 = document.querySelectorAll(".card-body")[1];
// cardBody2.addEventListener("mouseover",run);
// function run(e){
//     console.log(e.type);
// }
//* mouseout
//* o html etiketi üzerinden çıkınca çalışır lt etiketlerinin üzerlerinden çıkınca da bi daha çalışır
// cardBody2.addEventListener("mouseout",run);

//* mouseenter
//* sadece o html etiketi üzerine gelince çalışır alt elementler bundan etkilenmez
// const cardBody2 = document.querySelectorAll(".card-body")[1];
// cardBody2.addEventListener("mouseenter",run);
// function run(e){
//     console.log(e.type);
// }

//* mouseleave
//* sadece o html etiketin üzerinden çıkınca çalışır alt elementler bundan etkilenmez
const cardBody2 = document.querySelectorAll(".card-body")[1];
cardBody2.addEventListener("mouseleave",run);
function run(e){
    console.log(e.type);
}