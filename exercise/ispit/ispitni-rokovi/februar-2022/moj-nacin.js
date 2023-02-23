/*Kreirati klasu Tim koja ima sledeće atribute: ime tima, broj bodova, broj pobeda, broj
nerešenih, broj izgubljenih.
Napisati JavaScript program kojim će se pratiti bodovi timova u jednoj fudbalskoj ligi. Na početku korisnik pomoću prompt-a
unosi nazive 8 timova (nazivi timova su razdvojeni zarezom), pri čemu se svi ostali atributi timova inicijalizuju na vrednost 0.
Sve podatke treba smestiti u niz objekata klase Tim. Nakon svakog odigranog kola korisnik aplikacije unosi rezultate pomoću 4
tekst boksa, kao što je prikazano na slici. Nakon unosa, klikom na dugme "Snimi", snimaju se promene i vrši ažuriranje broja bodova.
Klikom na dugme "Kraj prvenstva" prikazuju se u numerisanoj listi na stranici tri najbolja tima u ligi. Svaka pobeda nosi 3 boda, 
nerešen ishod 1 bod, a izgubljena utakmica 0 bodova. Najbolji tim se odreduje na sledeći način:
bolji tim je onaj koji ima više bodova ako dva tima imaju isti broj bodova onda se gleda koji od njih ima više pobeda
ako imaju isto pobeda onda se gleda koji od njih ima više nerešenih ishoda.

Najbolji tim treba da bude prikazan zlatnom bojom, drugi po redu srebrnom, a treći bronzanom Heksadecimalni kodovi boja su:
Zlatna - #AF9500, Srebrna - #D7D7D7, Bronza - #6A3805. */


class Tim {
    constructor(ime) {
        this.ime = ime;
        this.brojBodova = 0;
        this.brojPobeda = 0;
        this.brojNeresenih = 0;
        this.brojIzgubljenih = 0;
    }
}
let brojTimova = prompt("Unesi broj Timova");
let nazivTimova = prompt("Unesite nazive timova");
let pom = [];
pom = nazivTimova.split(",");
let prviRezultat;
let drugiRezultat;
let table = document.querySelector("table");
console.log(table);

if (pom.length != brojTimova) {
    alert("Niste uneli trazeni broj timova unesite ponovo");
    brojTimova = prompt("Unesi broj Timova");
    nazivTimova = prompt("Unesite nazive timova");

}
if (pom.length > 8) {
    alert("Uneli ste vise od 8 timova unesite ponovo");
    brojTimova = prompt("Unesi broj Timova");
    nazivTimova = prompt("Unesite nazive timova");

}

let nizTimova = [];
for (let i = 0; i < pom.length; i++) {
    nizTimova[i] = new Tim(pom[i]);

}

let prviTim = document.querySelector('#prvi-tim');
let drugiTim = document.querySelector('#drugi-tim');
let rezultatPrvog = document.querySelector('#rezultat-prvog');
let rezultatDrugog = document.querySelector('#rezultat-drugog');

let snimi = document.querySelector('.snimi');
let krajPrvenstva = document.querySelector('.kraj-prvenstva');
let proveraNiz = [];
snimi.addEventListener('click', () => {
    for (let i = 0; i < nizTimova.length; i++) {
        if (prviTim.value === nizTimova[i].ime) {
            proveraNiz.push(nizTimova[i]);
        }
        if (drugiTim.value === nizTimova[i].ime) {
            proveraNiz.push(nizTimova[i]);
        }


    }
    if (proveraNiz[0].ime === prviTim.value || proveraNiz[1].ime === prviTim.value && proveraNiz[0].ime === drugiTim.value || proveraNiz[1].ime === drugiTim.value) {
        console.log("dobro je");
    } else {
        alert("Niste dobro uneli timove unesite ponovo");
    }
    prviRezultat = rezultatPrvog.value;
    drugiRezultat = rezultatDrugog.value;
    console.log(prviRezultat);
    console.log(drugiRezultat);
    for (let i = 0; i < proveraNiz.length; i++) {
        if (prviTim.value === proveraNiz[i].ime) {
            if (prviRezultat > drugiRezultat) {
                proveraNiz[i].brojBodova += 3;
                proveraNiz[i].brojPobeda++;
            } else if (prviRezultat === drugiRezultat) {
                proveraNiz[i].brojBodova += 1;
                proveraNiz[i].brojNeresenih++;
            } else {
                proveraNiz[i].brojIzgubljenih++;
            }
        }
        if (drugiTim.value === proveraNiz[i].ime) {
            if (drugiRezultat > prviRezultat) {
                proveraNiz[i].brojBodova += 3;
                proveraNiz[i].brojPobeda++;
            } else if (prviRezultat === drugiRezultat) {
                proveraNiz[i].brojBodova += 1;
                proveraNiz[i].brojNeresenih++;
            } else {
                proveraNiz[i].brojIzgubljenih++;
            }
        }

    }
    console.log(proveraNiz);



});

function provera() {

    // const toFindDuplicates = proveraNiz => proveraNiz.filter((item, index) => arr.indexOf(item) !== index)
    // const duplicateElements = toFindDuplicates(proveraNiz);
    // console.log(duplicateElements);

    for (let i = 0; i < proveraNiz.length; i++) {
        if (proveraNiz[i].ime === proveraNiz[i].ime) {
            proveraNiz.splice(i, 1);
        }
    }


    proveraNiz.sort(function(a, b) {
        if (b.brojBodova - a.brojBodova != 0) return b.brojBodova - a.brojBodova;
        else if (b.brojPobeda - a.brojPobeda != 0) return b.brojPobeda - a.brojPobeda;
        else return a.brojNeresenih - a.brojNeresenih;

    })
    console.log(proveraNiz);
}

krajPrvenstva.addEventListener("click", () => {
    provera();
    table.innerHTML = `
    <tr>
    <th>Ime</th>
    <th>Broj bodova</th>
    <th>Broj pobeda</th>
    <th>Broj neresenih</th>
    <th>Broj izgubljenih</th>
</tr>
    `;
    for (let i = 0; i < proveraNiz.length; i++) {
        table.innerHTML += `
        <tr>
        <td>${proveraNiz[i].ime}</td>
        <td>${proveraNiz[i].brojBodova}</td>
        <td>${proveraNiz[i].brojPobeda}</td>
        <td>${proveraNiz[i].brojNeresenih}</td>
        <td>${proveraNiz[i].brojIzgubljenih}</td>
    </tr>
        `;

    }
})