function sayiSec() {

    // 1 ile 50 arasında rastgele sayı oluşturur
    let rastgeleSayi = Math.floor(Math.random() * 50) + 1;

    // Oluşan sayıyı ekrana yazdırır
    document.getElementById("sayi").textContent = rastgeleSayi;
}