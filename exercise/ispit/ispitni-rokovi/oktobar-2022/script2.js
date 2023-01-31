let slova = "ABCDEFGHABCDEFGH";

let otvorene = [];

//funkcija za random broj
function randomNumber(min, max) {
    let broj = Math.floor(Math.random() * (max - min + 1) + min);
    return slova[broj];
    //braca slovo sa indeksom random broja
}

let brojOtvorenih = 0;

let cards = Array(16);

for (let i = 0; i < 16; i++) {
    //kartici se dodeljuje random broj
    cards[i] = randomNumber(0, slova.length - 1);
    //uzimamo indeks od tog broja koji je dodeljen kartici tj gde se nalazi u slovima
    let index = slova.indexOf(cards[i]);
    slova = slova.slice(0, index) + slova.slice(index + 1);
    //za c primer slova.slice(0,2) = A,B iskljucije zadnji
    //na to se dodaje slova.slice(3) gde se ukljucije i trojka
}

let cardElements = document.querySelectorAll(".card");

function flip(event) {
    if (brojOtvorenih === 2) {
        //poziva funkciju koja macinje klasu flip sa svih slika 
        //klasa flip ima transform: rotateY(90deg); pa se dodavanjem slika okrece za 90


        zatvoriSve();
    }
    //targetuje kliknutu sliku
    let clickedCard = event.currentTarget;
    let image = clickedCard.querySelector("img");

    if (image.classList.contains("flip")) {
        //ukoliko se ponovo klikne na istu sliku macinje se klasa flip i zatvara se karta
        image.classList.remove("flip");
        brojOtvorenih--;
    } else {
        //dodaje klasu flip na kliknutu sliku i ona se okrece
        //u pocetku nijedna slika nema klasu flip
        image.classList.add("flip");
        brojOtvorenih++;

    }

}

cardElements.forEach((card, index) => {
    card.innerHTML += "<p class='slovo'>" + cards[index] + "</p>";
    card.addEventListener("click", flip);

});

function zatvoriSve() {
    cardElements.forEach((card) => {
        let image = card.querySelector("img");
        image.classList.remove("flip");
    });
    brojOtvorenih = 0;
}


function removeCard(event) {
    let nizSlova = [];
    let clickedCard = event.currentTarget;
    let image = document.querySelectorAll('img');
    let slovo = document.querySelectorAll('.slovo');
    //uzimamo samo dva elementa koja uporedjujemo
    for (let i = 0; i < image.length; i++) {
        if (i % 2 == 0) {
            nizSlova = [];
        }
    }

    for (let i = 0; i < image.length; i++) {
        //stavljamo uslov da gledamo samo otvorene kartice
        if (image[i].classList.contains("flip")) {
            //dodajemo slova iz otvorenih kartica
            nizSlova[i] = slovo[i].innerHTML;
            //npr ako kliknemo karticu 0 i 15 stvorice se prazan prostor izmedju
            //ova funkcija sluzi da makne taj prazan prostor
            nizSlova = nizSlova.filter(entry => entry.trim() != '');
            cardElements.forEach(card => {
                //proveravamo da li su slova jednaka 
                if (nizSlova[0] === nizSlova[1]) {
                    //uzimamo sva slova iz kartica
                    let slovoKartice = card.querySelectorAll(".slovo");
                    for (let i = 0; i < slovoKartice.length; i++) {
                        //prolazimo kroz sva slova i ukoliko su jednaka sa nasim pogotkom
                        if (slovoKartice[i].innerHTML === nizSlova[0]) {
                            //brisemo kartice
                            card.remove();

                        }

                    }

                }
            });
        }
    }
}
cardElements.forEach((card, index) => {
    card.addEventListener("click", removeCard);


});