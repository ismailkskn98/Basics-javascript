//* ATAMA OPERATÖRLERİ

/*
    *  =        > Atama Operatörü  let a = 5;
    *  ==       > Eşittir.    console.log(5==5);     > true (içinde ki değerlerin eşit olup olmadığına bakıyor veri tipleri umrunda değil) console.log(5=="5"); > true
    *  ===      > Eşittir ama hem değerlerinin hemde veri tiplerinin eşit olup olmadıklarına bakıyor her şey eşit olmalı.
 */

//* += , -= , *= , /=

let sayi = 4;
// sayi = sayi+2;  bunu yapmak yerine
sayi += 2; //* üstekiyle aynı
sayi -= 1;
sayi *= 4;
sayi /= 5;
console.log(sayi);

//* %= , **=

let sayi2 = 12;
sayi2 %= 5;
console.log(sayi2);
//* -----------------
sayi2 **= 4;
console.log(sayi2);