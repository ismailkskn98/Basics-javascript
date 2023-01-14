//? Klavye Events

//? keypress : kullanıcı klavyede bir tuşa bastığında gerçekleşir. (sadece harf ve sayılarda tetiklenir)
// document.addEventListener("keypress", run);
// function run(e){
    //* keypress'in neler yaptığı
    // console.log(e);
    //* kullanmış olduğumuz event'in tipini veriyor
    // console.log(e.type);
    //* her bastığımız harf'i çekiyor
    // console.log(e.key);
//     console.log(e.code);
// };

//? keydown : klavyede basılan her şeyi çekiyor
// document.addEventListener("keydown",run);
// function run(e){
//     //* klavye de bastığın herhangi bir tuşu çekiyor
//     console.log(e.key);
// };

//? keyup : tuştan elini kaldırdığında çalışıyor
//* her tuşu algılıyor
// document.addEventListener("keyup",run);
// function run(e){
//     //* klavyede bir tuşa bas elini çektiğinde o tuşu çeker
//     console.log(e.key);
// };

//? Örnek
// //* Kullanıcının F5 tuşunu kullanarak sayfayı yenilemesini engelleyelim
// document.addEventListener("keydown",refreshBlock
// );
// function refreshBlock(e){
//         //* keyCode ile bastığımız tuşun karşılık gelen sayıyı çekebiliyoruz
//         console.log(e.keyCode);
//         //* F5'e karşılık gelen kod 116 olduğu için
//         if(e.keyCode === 116){
//             alert("Bu sayfada F5 ile yenileme yapılamaz.");
//         }

//         //* default ayarlarınızı engellediğimizde yönlendirmeleri engelleyebiliyoruz
//         e.preventDefault();
// }

//? Örnek
//* "todo giriniz" input'una yazılanları "Todo List Sayfası" yerine yazalım

const todoTitle = document.querySelectorAll(".card-title")[0];
const todoInput = document.querySelector("#todoName");

todoInput.addEventListener("keyup", run);

//* burdaki value içerisindeki değeri al demek için
//* e.key yaparsanız girdiğiniz harfi alıp sonrasında girdiğiniz her harfi için bulunan harfi günceller
function run(e){
    todoTitle.textContent = e.target.value;
};