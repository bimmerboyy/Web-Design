let paragraph = document.querySelector(".rezultat");
let paragraphs = document.querySelectorAll(".plavi");
paragraph.innerHTML = "Ovaj paragraph smo izmenili pomocu JS-a";

for (let i = 0; i < paragraphs.length; i++) {
    paragraph = paragraphs[i];
    paragraph.innerHTML = `Ovo je plavi paragraf sa indeksom ${i}`;
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}