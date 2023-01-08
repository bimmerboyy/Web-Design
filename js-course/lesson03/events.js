const klikni = (dugme) => {
    console.log("Klikni");
}

let btns = document.querySelectorAll("button");

btns.forEach(function(btn) {

    // Event listener koji ceka za klik za svaki button.
    btn.addEventListener("click", function(event) {

        let clicked_btn = event.target;
        console.log(clicked_btn.innerText);
    });
});

let link = document.querySelector("#link");

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
});

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

});

let opcije = document.querySelector("select");

opcije.addEventListener("change", (event) => {
    console.log(event.target.value);
});

window.addEventListener("resize", (event) => {
    if (window.innerWidth > 1000) {
        console.log("prozor veci od 1000")
    } else {
        console.log("Porzor manji od 1000");
    }
});

let input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        alert("Obrisao si nesto")

    }
});

input.addEventListener("mousemove", (event) => {
    console.log("Mis pomjeren");
});