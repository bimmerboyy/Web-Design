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
if (pom.length !== brojTimova) {
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