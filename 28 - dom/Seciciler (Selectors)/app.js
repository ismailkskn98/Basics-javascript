//? DOM Seçiciler (Selectors)

//? Id, ClassName, Tag Name

//? getElementByID : id'ye göre elementi yakalar

//* Id'si bu olan buttonu çağırıyoruz
// const button = document.getElementById("todoAddButton");
//* button'u yazdırıyoruz
// console.log(button);

//* elimizde ki buttonu (çağırdığımız) ıd'sini ekranda göster
// console.log(button.id);
//* bunu başka şu şekilde de alabiliriz
//* Attribute : ıd, class, type, href gibi
// console.log(button.getAttribute("id"));

//*class'ını çağıralım
// console.log(button.className);
//* veya
// console.log(button.getAttribute("class"));

//* class'ları listeleyelim
//* Array oluyor
// let classListesi = button.classList;
// console.log(classListesi);

//* 4. class'ı çağıralım
// classListesi = button.classList[3];
// console.log(classListesi);

// console.log("-------------");

//* class'ların üzerinde dönebiliriz
// const classListesi2 = button.classList;
// classListesi2.forEach(function(classİtem){
//         console.log(classİtem);
// })

//* text'i çağıralım (Todo Ekleyin)
//* yakalamış olduğumun elementin string olarak metni (text) değerini alabiliriz
// let buttonText = button.textContent;
// console.log(buttonText);
//* HTML etiketlerini de algılıyor 
// let buttonText2 = button.innerHTML;
// console.log(buttonText2);
//? Örnek
//* direkt string olarak algılıyor
// button.textContent = "<b> Todo Ekleyin </b>";
//* HTML etiketlerini algılayabilir
// button.innerHTML = "<b> Todo Ekleyin </b>";

//? getElementClassName : class ismine göre yakalar

//* Array olarak 4 tane html etiketini döndü
// const todoList = Array.from(document.getElementsByClassName("list-group-item")) ;
// todoList.forEach(function(todo) {
//         console.log(todo.textContent);
// });
// console.log(todoList);

//? getElementByTagName : etiket ismine göre yakalar

//* ixdex.html'de 2 tane form tag'i var onları çekelim
// const forms = document.getElementsByTagName("form");

//* getirdiği 2 form'un 2.sinin Id'sini getirelim
// console.log(forms[1].id);

//* li'leri çağıralım
// const liEtiketler = document.getElementsByTagName("li");
// console.log(liEtiketler);

//? Şimdiye kadar = getElementById - getElementByClassName - getElementByTagName
//* kullandık bu üçü'nün yerine sadece 1 tane kullanabiliyoruz bunlar : 
//! querySelector - querySelectorAll

//?Örnek

//*(css selector kullanıyoruz) Id ile çağırdımız için # kullanıyoruz
// const clearButton = document.querySelector("#clearButton");
// console.log(clearButton);

//* class ile çağıralım (nokta koyuyoruz)
//! querySelector kullandığımız için ilk class veya ıd olanı çağırıyor
// const todoList = document.querySelector(".list-group-item");
// console.log(todoList);

//! Eğer bütün o class'a sahip olanları çağırmak istiyorsak querySelectorAll kullanmalıyız
// const todoList = document.querySelectorAll(".list-group-item");
// console.log(todoList);

//* Todo 3'ü seçelim
// const todoList = document.querySelectorAll(".list-group-item")[2];
// console.log(todoList);

//* veya ilk cocuğu getir
// const todoList = document.querySelectorAll(".list-group-item:first-child");
// console.log(todoList);

//* son çocuğu getir
// const todoList = document.querySelectorAll(".list-group-item:last-child");
// console.log(todoList);

//* istediğin yerden çağır
// const todoList = document.querySelectorAll(".list-group-item:nth-child(2)");
// console.log(todoList);

//* "odd" tekleri seçer
// const todoList = document.querySelectorAll(".list-group-item:nth-child(odd)");
// console.log(todoList);

//* "even" Çiftleri seçer
// const todoList = document.querySelectorAll(".list-group-item:nth-child(even)");
// console.log(todoList);