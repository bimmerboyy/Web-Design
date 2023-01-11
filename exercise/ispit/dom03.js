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





for (let i = 0; i < studenti.length; i++) {
    let trPodaci = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = studenti[i].ime;
    let td2 = document.createElement("td");
    td2.innerHTML = studenti[i].prezime;
    let td3 = document.createElement("td");
    td3.innerHTML = studenti[i].prosek;
    trPodaci.appendChild(td1);
    trPodaci.appendChild(td2);
    trPodaci.appendChild(td3);
    table.appendChild(trPodaci);
    td1.style.border = "1px solid black";
    td2.style.border = "1px solid black";
    td3.style.border = "1px solid black";


}




let div = document.querySelector("#tabela");
div.appendChild(table);