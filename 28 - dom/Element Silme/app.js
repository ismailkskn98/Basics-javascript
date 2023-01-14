//? HTML Element'i Dinamik Olarak Silme
//* İki yol var

//? 1. Yol
const todos = document.querySelectorAll(".list-group-item");

//* cocuklarının 0. index'deki olanı sil
// todos[0].remove();
// todos[todos.length - 1 ].remove();

//? 2. Yol
//* Annesi üzerinden silme
const todoList = document.querySelector(".list-group");

todoList.removeChild(todos[1]);