let trenutniBroj = 0;
let allTotal = 0;

function watchMovie(element) {
    let mainEl = element.closest(".card");
    let price = mainEl.querySelector(".price span").innerText;
    price = parseInt(price);
    element.innerText = "Odgledato";
    element.setAttribute("disabled", "disabled");
    let name = mainEl.querySelector("h3").innerText;
    let chart = document.querySelector(".wached-films");
    chart.innerHTML += `<div class="first">
        <p class="name-of-film">${name}</p>
        <p class="price-of-film">$<span>${price}</span></p>
        <button onclick="removeFromCart(this)">Ukloni</button>
        </div>
        `;
    let total = document.querySelector(".total p span");
    allTotal += price;
    total.innerHTML = allTotal + "$";



}

function removeFromCart(element) {
    let mainEl = element.closest(".first");
    let price = mainEl.querySelector(".price-of-film span").innerText;
    price = parseInt(price);
    let name = mainEl.querySelector(".name-of-film").innerText;
    allTotal -= price;
    let total = document.querySelector(".total span").innerHTML = allTotal + "$";
    mainEl.remove();

    let films = document.querySelectorAll(".card");
    films.forEach(function(film) {
        let filmName = film.querySelector("h3").innerText;
        if (filmName === name) {
            film.querySelector(".gledaj").removeAttribute("disabled");
            film.querySelector(".gledaj").innerText = "Gledaj";

        }

    });
}






function rateFilm() {
    console.log("Radi ocena");

    let numberOfGrades = document.querySelector("input").value;
    if (trenutniBroj <= numberOfGrades) {
        trenutniBroj = numberOfGrades;

    }




    if (numberOfGrades > 0) {
        if (numberOfGrades == 5) {
            let input = document.querySelector("input");
            input.remove();
        }
        if (trenutniBroj > numberOfGrades) {
            star.remove();
        }


        for (let i = numberOfGrades; i <= numberOfGrades; i++) {

            let star = document.createElement("i");
            star.setAttribute("class", "fa-solid fa-star");
            let grades = document.querySelector(".grades");
            grades.appendChild(star);



        }
    }





}