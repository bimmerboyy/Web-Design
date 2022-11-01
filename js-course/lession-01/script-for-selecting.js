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

brend = document.querySelectorAll("span");

let modeli = document.querySelectorAll(".automobil-model");
for (let model of modeli) {
    console.log(model.innerText);
}

let recenica = document.querySelector("#recenica");

console.log(recenica.innerText);