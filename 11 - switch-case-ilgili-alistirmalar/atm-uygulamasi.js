						/*Switch - Case*/

/*
	Atm Uygulaması

	1-Bakiye görüntüleme
	2-Para çekme
	3-Para yatırma
	4-Çıkış
*/
let satirAtlama = "\n"
let islemler = "1 - Para çekme" + satirAtlama
+ "2 - Para yatırma" + satirAtlama
+ "3 - Çıkıs" + satirAtlama
+ "Lütfen yapmak istediğiniz işlemi seçiniz :";
let bakiye = Number(prompt("Bakiyenizi Giriniz :"));
let islem = prompt(islemler);

switch(islem) // değer
{

case "1":
	// Para çekme
	let cekilenPara = Number(prompt("Çekilecek Tutar : "));
	if(bakiye >= cekilenPara) {
		// bakiye yeterliyse
		console.log("İşleminiz başarılı, kalan tutar : " + (bakiye - cekilenPara));
	}else {
		// bakiye yetersiz
		console.log("İşlem başarısız, ihtiyacınız olan tutar : " + (cekilenPara - bakiye));
	}
	break;
case "2":
	// Para yatırma
	let yatırılanPara = new Number(prompt("Yatırılacak tutar : "));
	console.log("İşlem başarılı, güncel bakiyeniz : " + (bakiye + yatırılanPara));
	break;
case "3":
	// Çıkış işlemi
	console.log("Başarılı bir şekilde çıkış yaptınız.");
	break;
default:
	// hatalı tuşlama
	console.log("Hatalı tuşlama yaptınız!");
	break;
}