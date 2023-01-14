//* Benzin İstasyonu
// alt alta yazdırmak için \r\n kullanılıyor.
/*
 * Dizel    : 24.53 \r\n
 * Benzin   : 22.25 \r\n
 * LPG      : 11.1 \r\n

 * Gelen Müşteriden Alacağımız Bilgiler :
 * Yakıt Tipi
 * Yüklenecek Yakıt Litresi
 */

// ? benim yazdığım
// const yeniSatir = "\r\n";
// let yakitTip = prompt(" 1 - Dizel : 24.53 " + yeniSatir + " 2 - Benzin : 22.25 "    + yeniSatir + " 3 - LPG : 11.1 "   + yeniSatir + " Lütfen alacağınız yakıt tipinizi giriniz :");
// let yakitLt = Number(prompt("Lütfen alacağınız litreyi giriniz :"));
// let dizel = 24.53*yakitLt , benzin = 22.25*yakitLt , lpg = 11.1*yakitLt;

// if(yakitTip == "1"){
//     console.log("Aldığınız yakıt dizel, ödeyeceğiniz Tutar : " + dizel + " TL");
// }
// else if (yakitTip == "2"){
//     console.log("Aldığınız yakıt benzin, ödeyeceğiniz Tutar : " + benzin + " TL");
// }
// else if (yakitTip == "3"){
//     console.log("Aldığınız yakıt LPG, ödeyeceğiniz Tutar : " + lpg + " TL");
// }
// else{
//     console.log("Lütfen geçerli bir yakıt tipi seçiniz.");
// }

// ? hocanın yaptığı

let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Yakıt tipinizi seçiniz :";

let yakitTipi = prompt(yakitMetni);
let yakitLt = Number(prompt("Yakıt litresini giriniz"));
let bakiye = Number(prompt("Bakiyenizi giriniz"));

if(yakitTipi == "1"){
    //Dizel
    let odenecektutar = dizel*yakitLt;
    if(odenecektutar<bakiye){
        //bakiye yeterli
        alert("İşlem başarılı." + yeniSatir
        + "Ödenen Tutar : " + odenecektutar + " TL" + yeniSatir
        + "Kalan Bakiye : " + (bakiye - odenecektutar) + " TL"
        );
    }else{
        //bakiye yetersiz
        alert("Bakiyeniz yeterli değildir. "+ yeniSatir
        + "Ödenecek tutar : "+ odenecektutar + " TL" + yeniSatir
        + "Bakiyeniz : " + bakiye + " TL" + yeniSatir
        + "Eksik Tutar : " + (odenecektutar - bakiye) + " TL"
        );
    }
}
else if (yakitTipi == "2"){
    //Benzin
        let odenecektutar = benzin*yakitLt;
    if(odenecektutar<bakiye){
        //bakiye yeterli
        alert("İşlem başarılı." + yeniSatir
        + "Ödenen Tutar : " + odenecektutar + " TL" + yeniSatir
        + "Kalan Bakiye : " + (bakiye - odenecektutar) + " TL"
        );
    }else{
        //bakiye yetersiz
        alert("Bakiyeniz yeterli değildir. "+ yeniSatir
        + "Ödenecek tutar : "+ odenecektutar + " TL" + yeniSatir
        + "Bakiyeniz : " + bakiye + " TL" + yeniSatir
        + "Eksik Tutar : " + (odenecektutar - bakiye) + " TL"
        );
    }    
}
else if (yakitTipi == "3"){
    //LPG
        let odenecektutar = lpg*yakitLt;
    if(odenecektutar<bakiye){
        //bakiye yeterli
        alert("İşlem başarılı." + yeniSatir
        + "Ödenen Tutar : " + odenecektutar + " TL" + yeniSatir
        + "Kalan Bakiye : " + (bakiye - odenecektutar) + " TL"
        );
    }else{
        //bakiye yetersiz
        alert("Bakiyeniz yeterli değildir. "+ yeniSatir
        + "Ödenecek tutar : "+ odenecektutar + " TL" + yeniSatir
        + "Bakiyeniz : " + bakiye + " TL" + yeniSatir
        + "Eksik Tutar : " + (odenecektutar - bakiye) + " TL"
        );
    }
}
else{
    //Geçersiz seçenek
    alert("Lütfen geçerli bir yakıt tipi seçiniz!" + yeniSatir
    + "Örneğin : 2");
}