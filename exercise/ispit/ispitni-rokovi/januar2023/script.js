/*4. [20] Napraviti html stranicu koja predstavlja sistem za pronalaženje životinja. Koristiti fotografije sa interneta.
Pronadjeno, Izgubljeno, Kupujem i Doniram su bedževi (alternativa button). Na stranici se nalaze dve forme. 
Ove forme imaju padajuću listu za vrstu: Pas i Mačka, zatim se može uneti boja i naziv sa ogrlice. Kada se pronadje životinja
popunjava se forma Pronadjeno i podaci se smeštaju u prethodno kreirani niz objekata klase Zivotinja. Klasa ima vrsta, boja,
ogrlica, tip(pronadjena, izhubljena, naProdaji, donirana). Korisnik mora uneti sve podatke (izvršiti proveru), 
a ako nije uneo obavestiti ga porukom. Ukoliko je neko izgubio životinju ima mogućnost da popuni formu Izgubljeno 
(takodje mora uneti sve podatke) i ukoliko je neko već pronašao njegovog ljubimca ispisuje mu se uspešna poruka i za životinja
se uklanja iz niza za pronađene životinje, a ako nije potrebno je da se podaci sačuvaju u nizu Zivotinja. Klikom na pronadjeno
pomoću DOM kreirati 2 tabele. U prvoj tabeli prikazati sve pronađene pse, u drugoj tabeli sve pronađene mačke. Analogno tome
odraditi po 2 tabele za klik na izgubljeno, kupujem, doniram.*/
let proveri;
let selectPronadjeno = document.querySelector('#pronadjeno-vrsta');
let unetaVrsta;
let unetaBoja;
let unetaOgrlica;
let bojaPronadjeno = document.querySelector('#boja-pronadjeno');
let ogrlicaPronadjeno = document.querySelector('#ogrlica-pronadjeno');
let br = 0;
let nizZivotinja = [];
let prijaviPronadjeno = document.querySelector('#pronadjeno-prijavi');
let zivotinja1, zivotinja2, zivotinja3;
prijaviPronadjeno.addEventListener("click", () => {

    unetaVrsta = selectPronadjeno.value;
    unetaBoja = bojaPronadjeno.value;
    unetaOgrlica = ogrlicaPronadjeno.value;
    if (br === 0) {
        zivotinja1 = new Zivotinja(unetaVrsta, unetaBoja, unetaOgrlica, "izgubljena");
        nizZivotinja.push(zivotinja1);
    }
    if (br === 1) {
        zivotinja2 = new Zivotinja(unetaVrsta, unetaBoja, unetaOgrlica, "pronadjena");
        nizZivotinja.push(zivotinja2);
    }
    if (br === 2) {
        zivotinja3 = new Zivotinja(unetaVrsta, unetaBoja, unetaOgrlica, "pronadjena");
        nizZivotinja.push(zivotinja3);

    }
    if (br > 2) {
        unetaBoja.value = "";
        unetaVrsta.value = "";
        unetaBoja.value = "";
    }
    localStorage.setItem("zivotinje", JSON.stringify(nizZivotinja));




    console.log(nizZivotinja);

    proveri = () => {
        for (let i = 0; i < nizZivotinja.length; i++) {


            if (nizZivotinja[i].vrsta === vrstaIzgubljeno.value && nizZivotinja[i].boja === bojaIzgubljeno.value && nizZivotinja[i].ogrlica === ogrlicaIzgubljeno.value && nizZivotinja[i].tip === 'pronadjena') {
                alert("Pronadjena je " + nizZivotinja[i].vrsta);
                nizZivotinja.splice(i, 1)

            } else if (nizZivotinja[i].tip === "izgubljena") {
                alert("Nije pronadjena");
            }

        }
    }


    console.log(zivotinja1);
    console.log(zivotinja2);
    console.log(zivotinja3);
    br++;
});


class Zivotinja {
    constructor(vrsta, boja, ogrlica, tip) {
        this.vrsta = vrsta;
        this.boja = boja;
        this.ogrlica = ogrlica;
        this.tip = tip;
    }

}

let vrstaIzgubljeno = document.getElementById('vrsta');
let bojaIzgubljeno = document.getElementById('boja');
let ogrlicaIzgubljeno = document.getElementById('ogrlica');

let prijaviIzgubljeno = document.getElementById('prijavi-izgubljeno');

prijaviIzgubljeno.addEventListener('click', () => {

    proveri();
});