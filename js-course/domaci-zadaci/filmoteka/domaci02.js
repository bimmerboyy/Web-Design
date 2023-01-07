function watchMovie() {
    console.log("Radi");
}
let trenutniBroj = 0;




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