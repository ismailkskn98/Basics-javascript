//? STRİNG METHODLARI
let metin = "Modern web geliştirme kursu";
let tarih = "2022";

//* charAt(); // Belirtilen dizindeki verdiğin index numarasına göre karakteri döndürür. (boşluklar dahil)
// let deneme = metin.charAt(7);
// console.log(deneme);

//* concat(); // İki veya daha fazla dizenin birleşimini içeren bir dize döndürür.
// let yeniMetin = metin.concat(" ",tarih, " ", "İsmail");
// console.log(yeniMetin);

//* indexOf(); // bir alt dizenin ilk geçtiği konumu döndürür.
// let deneme = metin.indexOf("g",12);
// console.log(deneme);

//* lastIndexOf(); // Dizedeki bir alt dizenin son geçtiği yeri döndürür.
// let deneme = metin.lastIndexOf("e");
// console.log(deneme);

//* toUpperCase(); // Hepsini büyük harfe çeviren method
// console.log(metin);
// let deneme = metin.toUpperCase();
// console.log(deneme);

//* toLowerCase(); // Hepsini küçük harfe çeviren method
// console.log(metin);
// let deneme = metin.toLowerCase();
// console.log(deneme);

//* trim(); // Bir dizeden baştaki ve sondaki boşluk ve satır sonlandırıcı karakterleri kaldırır.
//TODO Çok kullanacaksın
// console.log(metin);
// let deneme = metin.trim();
// console.log(deneme);

//* slice(); // Bir dizenin bir bölümünü döndürür.
// let newMetin = metin.slice(7,21);
// console.log(newMetin);

//* substring(); // Bir dizenin bir bölümünü döndürür.
// console.log(metin);
// console.log(metin.substring(0,6));

//* replace(); // neyi neyle değiştiriyim (harf duyarlılığı var)
// console.log(metin);
// console.log(metin.replace("Modern","Güncel"));

//* split(); // belirttiğin karakterleri ayırıcı olarak kullanarak her birini 1 dizi index'i halinde yeni bir dizi oluşturur
// console.log(metin);
// let newMetinArray = metin.split(" ");
// console.log(typeof newMetinArray);
// console.log(newMetinArray);
// console.log(newMetinArray[3]);
//* valueOf(); // sonraki ders anlatıcam

//* startSwith(); // bana bir değer ver onunla başlıyo mu başlamıyor mu diye sana true veya false değeri döneyim (Harf de verebiliyorsun kelime de)
// console.log(metin);
// console.log(metin.startsWith("M"));
//* endSwith(); // bana bir değer ver onunla bitiyor mu bitmiyor mu diye sana true veya false değeri döneyim (Harf de verebiliyorsun kelime de)
// console.log(metin);
// console.log(metin.endsWith("u"));
