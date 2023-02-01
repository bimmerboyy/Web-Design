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
        this.brbodova = 0;
        this.brpobeda = 0;
        this.brnereseno = 0;
        this.brizgubljeno = 0;

    }


}
var NizTimova = [];
var brojTimova = prompt("Unesite broj timova:");
for (let i = 0; i < brojTimova; i++) {
    var im = prompt(`Unesite naziv ${i+1} .tima:`);
    NizTimova[i] = new Tim(im);
}



var one = document.getElementById("prvi");
var oneres = document.getElementById("rezprvi");
var secres = document.getElementById("rezdrugi");
var sec = document.getElementById("drugi");
var snimi = document.getElementById("btn1");
var kraj = document.getElementById("btn2");

one.addEventListener("input", provera);
sec.addEventListener("input", provera2);
var prvi, drugi;

function provera() {
    for (let i = 0; i < NizTimova.length; i++) {
        if (one.value === NizTimova[i].ime) {
            var br1 = oneres.value;
            prvi = i;
            break;
        }

    }
}

function provera2() {
    for (let i = 0; i < NizTimova.length; i++) {
        if (sec.value === NizTimova[i].ime) {
            var br2 = secres.value;
            drugi = i;
            break
        }

    }
}

snimi.addEventListener("click", prikazi);

function prikazi() {
    if (oneres.value > secres.value) {
        NizTimova[prvi].brbodova += 3;
        NizTimova[prvi].brpobeda++;
        NizTimova[drugi].brizgubljeno++;;
    } else if (oneres.value < secres.value) {
        NizTimova[drugi].brbodova += 3;
        NizTimova[drugi].brpobeda++;
        NizTimova[prvi].brizgubljeno++;
    } else {
        NizTimova[prvi].brbodova++;
        NizTimova[drugi].brbodova++;
        NizTimova[prvi].brnereseno++;
        NizTimova[drugi].brnereseno++;
    }



}

kraj.addEventListener("click", prikaz);

function prikaz() {


    NizTimova.sort(function(a, b) {
        if (b.brbodova - a.brbodova != 0) return b.brbodova - a.brbodova;
        else if (b.brpobeda - a.brpobeda != 0) return b.brpobeda - a.brpobeda;
        else return a.brnereseno - a.brnereseno;
    });


    var tabela = document.getElementById("tbl");
    var red = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");
    var tx1 = document.createTextNode("Ime tima");
    var tx2 = document.createTextNode("Broj pobeda");
    var tx3 = document.createTextNode("Broj neresenih");
    var tx4 = document.createTextNode("Broj poraza");
    var tx5 = document.createTextNode("Ukupan broj poena");
    tabela.appendChild(red);
    th1.appendChild(tx1);
    th2.appendChild(tx2);
    th3.appendChild(tx3);
    th4.appendChild(tx4);
    th5.appendChild(tx5);
    red.appendChild(th1);
    red.appendChild(th2);
    red.appendChild(th3);
    red.appendChild(th4);
    red.appendChild(th5);

    for (let i = 0; i < NizTimova.length; i++) {
        var tabela = document.getElementById("tbl");
        var red = document.createElement("tr");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");

        tabela.appendChild(red);
        if (i == 0) red.style.backgroundColor = "#af9500";
        else if (i == 1) red.style.backgroundColor = "#d7d7d7";
        else if (i == 2) red.style.backgroundColor = "#6a3805";

        var p1 = document.createTextNode(NizTimova[i].ime);
        var p2 = document.createTextNode(NizTimova[i].brpobeda);
        var p3 = document.createTextNode(NizTimova[i].brnereseno);
        var p4 = document.createTextNode(NizTimova[i].brizgubljeno);
        var p5 = document.createTextNode(NizTimova[i].brbodova);

        td1.appendChild(p1);
        td2.appendChild(p2);
        td3.appendChild(p3);
        td4.appendChild(p4);
        td5.appendChild(p5);

        red.appendChild(td1);
        red.appendChild(td2);
        red.appendChild(td3);
        red.appendChild(td4);
        red.appendChild(td5);
    }


}