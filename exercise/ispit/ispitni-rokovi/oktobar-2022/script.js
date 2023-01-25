/*[30] Kreirati JavaScript kod pomoću kojeg će se ilustrovati igra memorije. Igra se sastoji
od 16 kartica postavljenih kao mreža ili tablica, kod kojih svaka karta ima odgovarajući par.
Sve kartice su prvobitno okrenute i vidljiva im je poledina (koja je ista kod svih).
Random funkcijom kartama su dodeljena slova (8 različitih slova). Karte su položene
na podlogu "licem" tako da su sva slova skrivena. Klikom na kartu ona se okreće i vidi
se slovo koje se nalazi na njoj. Možemo otvoriti jos jednu karticu i ako su slova ista one
se brišu a ako nisu vraćaju se okrenute ka podlozi. Kraj igre je kad su sve kartice izbrisane.*/


let filpCard = () => {
    let cards = document.querySelectorAll('.card');
    let removeImage = document.querySelectorAll('.card img');
    removeImage.forEach((images, index) => {
        images.src = "";
        images.alt = index;

    });
    cards.forEach(card => {
        card.style.border = "1px solid black";
    });


};

let addRandomNumber = () => {
    let cards = document.querySelectorAll('.card');
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 8; i++) {

    }

};