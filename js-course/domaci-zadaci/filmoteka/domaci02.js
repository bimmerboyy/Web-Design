function watchMovie() {
    console.log("Radi");
}

function rateFilm() {
    console.log("Radi ocena");
    let numberOfGrades = document.querySelector("input").value;
    console.log(numberOfGrades);

    for (let i = numberOfGrades; i <= numberOfGrades; i++) {

        let star = document.createElement("i");
        star.setAttribute("class", "fa-solid fa-star");
        let grades = document.querySelector(".grades");
        grades.appendChild(star);

    }

}