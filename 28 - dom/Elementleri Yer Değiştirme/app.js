//? HTML Elementlerin Yerlerini Değiştirme

const cardBody2 = document.querySelectorAll(".card-body")[1];

//* cardBody2 'nin çocuklarını getir ama NodeList tipinde
console.log(cardBody2.childNodes);

//* Yeni Element
const newH2 = document.createElement("h2");
newH2.className = "card-title";
newH2.innerHTML = "Todo List Sayfası (Yenilendi)";

//* Yeni Elementi Eskisiyle Değiştir
//* İlk yeni olanı, sonra eski olanı
cardBody2.replaceChild(newH2,cardBody2.childNodes[1]);