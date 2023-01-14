//? TodoList Projesi

// lazım olan elementleri çekelim
const todoInput = document.querySelector("#todoName");
const form = document.querySelector("#todoAddForm");
const todoSearch = document.querySelector("#todoSearch");
const todosClear = document.querySelector("#clearButton");
const todoList = document.querySelector(".list-group");
const cardBody = document.querySelectorAll(".card-body")[0];
const cardBody2 = document.querySelectorAll(".card-body")[1];
let todos;

runEvents();

// formdaki "Todo Ekleyin" butonu basıldığında inputGetting methodu çalışsın
function runEvents(){
    form.addEventListener("submit",inputGetting);
    //sayfam açıldığında veya yenilendiğinde
    document.addEventListener("DOMContentLoaded",pageLoaded);
    // cardBody2'ye tıklandığında
    cardBody2.addEventListener("click", removeTodo);
}

// local storage'de olan değerleri arayüze ekleme
function pageLoaded(){
    checkStorage();
    todos.forEach(function(todo){
        inputPrinting(todo);
    });
}

//- todo kaldırma
function removeTodo(e){
    //arayüzden
    // console.log(e.target.className);
    if (e.target.className === "fa fa-remove") {
        // cocuktan anneye anneden anneye
        const todo = e.target.parentNode.parentNode;
        // silme
        todo.remove();
        // local storage'den kaldırma
        
        // uyarı
        showAlert("alert-success", "Başarıyla silindi.");
    }
}

// girilen değeri alıp gönderme
function inputGetting(e){
    // girilen değeri sağında solunda boşlukları almadan çekme
    const inputText = todoInput.value.trim();
    // değeri çekmeden önce kontrol edelim boş ise hata verelim
    if(inputText==null || inputText == ""){
        // hata
        showAlert("alert-danger", "Lütfen bir değer giriniz !");
    }else{
        //(arayüze ekleme)
        // dolu bir değer ise değerimizi "inputPrinting" methoduna gönderelim
        inputPrinting(inputText);
        //(storage'e ekleme)
        inputPrintingStorage(inputText);
        showAlert("alert-success", "Todo Başarılı bir şekilde eklendi.");
    }
    //submit tetiklendiğinde yönlendirme yapmasın
    e.preventDefault();
}

// ul'nin içine element'imizi oluşturalım değerimizi içine çekelim
function inputPrinting(value){
    // li oluştu
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = value;
    // a oluştu
    const a = document.createElement("a");
    a.href ="#";
    a.className = "delete-item";
    // i oluştu
    const i = document.createElement("i");
    i.className = "fa fa-remove";
    // sırasınla birbirinin içine ekliyoruz
    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    // değeri gönderdikten sonra inputun içi boş kalsın
    todoInput.value = "";
}

// değerimizin içi boş mu? değil mi ? bakalım
// boş ise değilse array olarak çekelim
function checkStorage(){
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
    todos = JSON.parse(localStorage.getItem("todos"));   
    }
}

//local storage değer ekleme
function inputPrintingStorage(value){
    // stragekontrol'ü çalıştıralım
    checkStorage();
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert (type, message){
    const div = document.createElement("div");
    //bu şekilde verilebilir
    // div.className = "alert "+ type;
    // veya bu şekilde
    div.className = `alert ${type}`; // litirel template
    div.role ="alert";
    div.textContent = message;
    cardBody.appendChild(div);
    
    // uyarı mesajı bir süre sonra kaybolması için
    // setTimeout(() => {

    // }, timeout);
    // 2,5 saniye sonra şu method çalışsın
    setTimeout(function() {
        //div elementi kaldırılsın
        div.remove();
    }, 1500);
}
