//? İnput Events
const todoInput = document.querySelector("#todoName");


//* focus : İnput'un içine focuslandığınızda imleci input'un içine bıraktığınızda yani input'un içine girdiğinizde çalışır
// todoInput.addEventListener("focus", run);

// function run (e){
    //* kullanılan event'ın tipini ekrana yazdıralım
//     console.log(e.type);
// }

//* blur : İnput'dan çıktığınızda tetiklenir (çalışır)
// todoInput.addEventListener("blur", run);
// function run(e){
//     console.log(e.type);
// };


//* copy : İnput'un içinden bir değer kopyaladığında (klavyeden veya maus ile) copy event'ınız çalışır
// todoInput.addEventListener("copy", run);
// function run(e){
//     console.log(e.type);
// };

//* paste : Dişardan veya içerden bir değeri kopyalayıp input'un içine paste(yapıştırırsak) paste event'ı çalışır
// todoInput.addEventListener("paste", run);
// function run(e){
//     console.log(e.type);
// };

//* cut : İnput'un içinden bir değer kestiğinde (ctrl - x) veya mous ile cut event'ı çalışır
// todoInput.addEventListener("cut", run);
// function run(e){
//     console.log(e.type);
// };

//* select : İnput'un içinde bir değeri mous veya klavye ile seçtiğinizde select event'ı çalışır
todoInput.addEventListener("select", run);
function run(e){
    console.log(e.type);
};