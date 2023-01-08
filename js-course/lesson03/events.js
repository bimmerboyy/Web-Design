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