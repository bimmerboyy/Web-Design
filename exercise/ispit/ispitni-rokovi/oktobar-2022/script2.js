let slova = "ABCDEFGHABCDEFGH";

let otvorene = [];

function randomNumber(min, max) {
    let broj = Math.floor(Math.random() * (max - min + 1) + min);
    return slova[broj];
}

let brojOtvorenih = 0;

let cards = Array(16);

for (let i = 0; i < 16; i++) {
    cards[i] = randomNumber(0, slova.length - 1);
    let index = slova.indexOf(cards[i]);
    slova = slova.slice(0, index) + slova.slice(index + 1);
}

let cardElements = document.querySelectorAll(".card");

function flip(event) {
    if (brojOtvorenih === 2) {
        zatvoriSve();
    }
    let clickedCard = event.currentTarget;
    let image = clickedCard.querySelector("img");
    if (image.classList.contains("flip")) {
        image.classList.remove("flip");
        brojOtvorenih--;
    } else {
        image.classList.add("flip");
        brojOtvorenih++;
    }
    console.log(brojOtvorenih);
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
