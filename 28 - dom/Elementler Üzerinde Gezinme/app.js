//? Elementler Üzerinde Gezinme

let todolar = document.querySelector(".list-group");
let todo1 = document.querySelector(".list-group-item ");
let todo4 = document.querySelector(".list-group-item:last-child");
let card = document.querySelector(".card");
let value;
//? Anneden çocuklara erişmek
value = todolar;

//* todolar daki çocukları array halinde getirir
// value = todolar.children;

//* sadece 0. index'i çağırmak için
// value = todolar.children[0];
//* sondaki çocuğa erişmek
// value = todolar.children[todolar.children.length - 1];
//* 3. çocuğun text'ini değişitirelim
// value = todolar.children[2].textContent = "Değişti";
//* todolar'ın çocuklarını array'e çevirelim
// value = new Array(todolar.children);
//* array'e çevirdiğimiz'in üzerinde forEach ile gezinelim
// value.forEach(function (todo) {
//   console.log(todolar.textContent.trim());
// });

//? Çocuktan anneye erişmek
// value = todo1;
// value = todo1.parentElement;
//* bir üst anaanneye gitmek için
// value = todo1.parentElement.parentElement;
//* anaanne'nin annesi için
// value = todo1.parentElement.parentElement.parentElement;

//? Kardeş kardeşe erişebilme
value = todo1;
//* Senden bir sonraki element'i getir
// value = todo1.nextElementSibling;
//* ikinci kardeşten sonrakini almak için yoksa null döner
// value = todo1.nextElementSibling.nextElementSibling;
//* bir önceki çocuğa erişmek için
// value = todo4;
// value = todo4.previousElementSibling;

//? todo4 den başlayıp "Todo Listesi" olan yazıyı değiştirelim
//* İlk olarak anne'ye erişelim
// value = todo4.parentElement;
//* list-group'un kardeşi olan "h5 class'ı : card-title" erişelim
// value = todo4.parentElement.previousElementSibling.previousElementSibling;
//* Şimdi text'i yakalayıp değiştirelim
// value =
//   todo4.parentElement.previousElementSibling.previousElementSibling.innerHTML =
//     "Değiştirildi. (İşlem başarılı)";

//? aynısını birde yukardan gelerek (row'dan) yapalım
//* row'u çekelim
let row = document.querySelector(".row");
//* row'un sadece 1 çocuğu varmış (card w-100 mt-3) onu çekelim ve
//* onunda 4. çocuğu olan (card-body)'yi çekelim ve
//* onunda ilk çocuğu olan h5 (card-title) 'lı çekelim
//* text'i yakalayıp değişimi yapalım
// value = row.children[0].children[3].children[0].textContent =
//   "Değiştirildi. (İşlem başarılı)";
// console.log(value);
