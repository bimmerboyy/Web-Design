// let brend = document.getElementsByTagName('span');

// for (let auto of brend) {
//     console.log(auto.innerText);
// }

// console.log("--------------------------------");

// let model = document.getElementsByClassName("automobil-model");

// for (auto of model) {
//     console.log(auto.innerText);

// }

// let najbolji = document.getElementById("recenica");

// console.log(najbolji.innerText);

// brend = document.querySelectorAll("span");

// let modeli = document.querySelectorAll(".automobil-model");
// for (let model of modeli) {
//     console.log(model.innerText);
// }

// let recenica = document.querySelector("#recenica");

// console.log(recenica.innerText);

//Selektovanje elementa po ID-u i brisanje istog

let recenica = document.querySelector("#recenica");
recenica.remove(); //remove sluzi za brisanje elementa sa stranice

//Kreiranje novog div elemena
let noviEl = document.createElement("div");

nociEl.classList = "novi-element";

document.appendChild(noviEl);

console.log(noviEl);