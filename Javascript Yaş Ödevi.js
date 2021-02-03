var isim = prompt("Adınız nedir?", "Joe Doe");
var evlenecegiYas = parseInt(prompt("Kaç yaşında evlendiniz?", "28(?)"));
var resitYas = 18;

for (let i = 0; i < 35; i++) {
    if (i === 0) {
        console.log(isim + " Doğdu.");
    }
    else if (i === resitYas ) {
        console.log(isim + " Reşit oldu.");
    }
    else if (i === evlenecegiYas) {
        console.log(isim + " Evlendi.");
    }
    else {
        console.log(isim + " " + i + " yaşında.");
    }
}