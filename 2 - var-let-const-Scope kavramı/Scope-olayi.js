//* Var - Let - Const 

/*
    ! SCOPE (Kapsam)

    * Global Scope (Her yerden erişebilirsin.)
    * Function Scope
    * Block Scope
*/
var a = 5; //* Global Scope (sen buna her yerden erişebilirsin)
          //* Süslü parantez içerisinde tanımlamaman gerekiyor

function method1() {
    console.log(a);
}
method1();

//* Function Scope (Function süslü parantezi içesinde tanımladığın değişkenler dışarıda görünmez.)
function method2() {
    var sayi = 10; //* Function Scope
    console.log(sayi);
}
method2();

//* Block Scope
function method3(){ 
    var sayi2 = 10; //*Function Scope (sari süslü parantezin içinde ki yer yerden erişilebilir.)

    if(true){ 
        sayi3 = 15; //* Block Scope (sadece bu mor süslü parantez içinde erişilebilir.)
    }
}