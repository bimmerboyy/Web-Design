let izracunaj = (a, b) => {
    console.log(a + b);
}
let btn = document.querySelector("button");

// izracunaj = (10, 5);

btn.addEventListener('click', event => {
    izracunaj(10, 5);
});

let tekst = document.querySelector("input");

tekst.addEventListener('keydown', event => {

    let character = event.target.value;
    if (character == character.toUpperCase()) {
        console.log("Uneta su velika slova");
    }


});