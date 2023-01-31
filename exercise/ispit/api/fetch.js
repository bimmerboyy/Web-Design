let p = document.createElement("p");
let body = document.querySelector('body');


fetch("../api/test.json")
    .then(response => response.json())
    .then(data => showInfo(data));

function showInfo(data) {
    p.innerText += data.countries;
    body.appendChild(p);
}