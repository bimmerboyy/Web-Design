let range = document.querySelector("input");
let brojPoena = document.querySelector(".broj-poena");



let nizStudenata = [];

for (let i = 0; i < 10; i++) {
    let ime = prompt("Unesite imena studenata");
    let br = Math.floor(Math.random() * 10) + 1;

    let obj1 = {
        name: ime,
        ocena: br
    }
    nizStudenata.push(obj1);
}


let kreirajTabelu = ocena => {
    let tabela = document.querySelector("table");
    let trZaglavlje = document.createElement("tr");
    let thIme = document.createElement("th");
    let thOcena = document.createElement("th");
    thIme.innerText = "Ime studenta";
    thOcena.innerText = "Ocena";
    trZaglavlje.appendChild(thIme);
    trZaglavlje.appendChild(thOcena);
    tabela.appendChild(trZaglavlje);
    for (let i = 0; i < 10; i++) {
        if (nizStudenata[i].ocena >= ocena) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.innerText = nizStudenata[i].name;
            td2.innerText = nizStudenata[i].ocena;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabela.appendChild(tr);
        }

    }

};
kreirajTabelu(5);

function ocistiTabelu() {
    const tabela = document.getElementById("tabela");
    while (tabela.firstChild) {
        tabela.removeChild(firstChild);
    }

}


range.addEventListener("change", event => {
    brojPoena.innerText = event.target.value;
    ocistiTabelu();
    kreirajTabelu(event.target.value);
});