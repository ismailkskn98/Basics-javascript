/*			Switch - Case
		

		switch ( deger ) {
			case 1:
				//kodlar
				break;
			case 2;
				//kodlar
				break;
			case 3;
				//kodlar
				break;
			default:
				//kodlar
				break;
		}

*/

//  Örnek

/*let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz");

switch (sayi) // 1 2 3 4 5
{
	case "1":
		//1 seçerse çalışacak
		console.log("Girilen sayi 1'dir");
		break;
	case "2":
		//2 seçerse çalışacak
		console.log("Girilen sayi 2'dir");
		break;
	case "3":
		//3 seçerse çalışacak
		console.log("Girilen sayi 3'tür");
		break;
	case "4":
		//4 seçerse çalışacak
		console.log("Girilen sayi 4'dür");
		break;
	case "5":
		//5 seçerse çalışacak
		console.log("Girilen sayi 5'dir");
		break;
	default:
		//1 ile 5 in dışında birşey yazarsa çalışacak
		console.log("Hatalı tuşlama yaptınız !!!");
		break;
}*/

// Örnek
let yeniSatir = "\n";
let metin = "1-Pazartesi" + yeniSatir
+ "2-Sali" + yeniSatir
+ "3-Çarşamba" + yeniSatir
+ "4-Perşembe" + yeniSatir
+ "5-Cuma" + yeniSatir
+ "6-Cumartesi" + yeniSatir
+ "7-Pazar" + yeniSatir
+ "Lütfen gün seçimi yapınız.";

let gun = prompt(metin);
switch(gun){
case "1":
	console.log("Seçtiğiniz gün pazartesi");
	break;
case "2":
	console.log("Seçtiğiniz gün salı");
	break;
case "3":
	console.log("Seçtiğiniz gün Çarşamba");
	break;
case "4":
	console.log("Seçtiğiniz gün perşembe");
	break;
case "5":
	console.log("Seçtiğiniz gün cuma");
	break;
case "6":
	console.log("Seçtiğiniz gün cumartesi");
	break;
case "7":
	console.log("Seçtiğiniz gün pazar");
	break;
default:
	console.log("Yanlış seçim yaptınız!");
	break;
}