const obj1 = {
    ime: "Tarik",
    prezime: "Kucevic",
    prosek: 9.91
}
const obj2 = {
    ime: "Nikola",
    prezime: "Matkovic",
    prosek: 9.78
}
const obj3 = {
    ime: "Abdulah",
    prezime: "Eminovic",
    prosek: 7.89
}
const obj4 = {
    ime: "Ermin",
    prezime: "Paljevic",
    prosek: 9.81
}

let studenti = [obj1, obj2, obj3, obj4];


let table = document.createElement('table');
let trZaglavlje = document.createElement('tr');
let thIme = document.createElement('th');
let thPrezime = document.createElement("th");
let thProsek = document.createElement("th");
thIme.innerHTML = "Ime";
thPrezime.innerHTML = "Prezime";
thProsek.innerHTML = "Prosek";

trZaglavlje.appendChild(thIme);
trZaglavlje.appendChild(thPrezime);
trZaglavlje.appendChild(thProsek);

table.appendChild(trZaglavlje);
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
thIme.style.border = "1px solid black";
thPrezime.style.border = "1px solid black";
thProsek.style.border = "1px solid black";


let btn = document.querySelector("button");
btn.style.marginTop = "30px";

for (let i = 0; i < studenti.length; i++) {
    let trPodaci = document.createElement("tr");
    trPodaci.setAttribute("class", "tr-podaci");
    let td1 = document.createElement("td");
    td1.setAttribute("class", "td1");
    td1.innerHTML = studenti[i].ime;
    let td2 = document.createElement("td");
    td1.setAttribute("class", "td2");
    td2.innerHTML = studenti[i].prezime;
    let td3 = document.createElement("td");
    td1.setAttribute("class", "td3");
    td3.innerHTML = studenti[i].prosek;


    trPodaci.appendChild(td1);
    trPodaci.appendChild(td2);
    trPodaci.appendChild(td3);
    table.appendChild(trPodaci);

    td1.style.border = "1px solid black";
    td2.style.border = "1px solid black";
    td3.style.border = "1px solid black";
}




trZaglavlje.style.background = "yellow";


function sortiraj() {

    studenti.sort((a, b) => b.prosek - a.prosek);

    for (let i = 0; i < studenti.length; i++) {
        let trPodaci = document.querySelector("tr-podaci");
        let td1 = document.querySelector(".td1");
        let td2 = document.querySelector(".td2");
        let td3 = document.querySelector(".td3");

        td1.innerHTML = studenti[i].ime;
        td2.innerHTML = studenti[i].prezime;
        td3.innerHTML = studenti[i].prosek;

        trPodaci.appendChild(td1);
        trPodaci.appendChild(td2);
        trPodaci.appendChild(td3);
        table.appendChild(trPodaci);


    }
}





let div = document.querySelector("#tabela");
div.appendChild(table);