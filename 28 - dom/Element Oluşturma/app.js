//? Dinamik Olarak Element Oluşturma


//? Örnek
//* Bir tane button oluşturup "card-body" 2. div'in en sonuna koyalım

//* 2 tane "card-body" class'ı var bunun 2. olanını seçmemiz gerek
const card2 = document.querySelector(".card-body:last-child");

//* bir tane "a" elementi oluşturmak için
const link = document.createElement("a");
link.id = "goBlockWebSitesi";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "metodenemeyazilim.ml";
link.target = "_Blank";
link.innerHTML = "Kişisel Web Siteme Git";
console.log(link);

//* oluşturduğumuz elementi "card-body" nin sonuna ilave etmek için "appendChild" kullanıcaz
card2.appendChild(link);


// ? Örnek 2 ()
//* Todo 5 ekleyelim

/* <li class="list-group-item d-flex justify-content-between">
Todo 1
<a href="#" class="delete-item">
  <i class="fa fa-remove"></i>
</a>
</li> */

//* li'lerin oldukları (todo'ların) ul'yi çağıralım
const todolar = document.querySelector(".list-group");

//* todo 5 'i oluşturalım
const todo5 = document.createElement("li");
//* içindeki link'i oluşturalım
const todoLink5 = document.createElement("a");
//* içindeki i'elementini oluşturalım
const todoIcon5 = document.createElement("i");
//* özelliklerini verelim
todo5.className = "list-group-item d-flex justify-content-between";
todo5.innerHTML = "Todo 5";
todoLink5.className = "delete-item";
todoLink5.href = "#";
todoIcon5.className = "fa fa-remove";

//* oluşturduğumuz i'yi link'in içine
//* link'i de li'nin içine atalım
todoLink5.appendChild(todoIcon5);
todo5.appendChild(todoLink5);

//* oluşturduğumuz todo5'i "list-group" class'ına sahip ul'nin içine atalım
//* (son çocuğun bu olsun)
todolar.appendChild(todo5);
