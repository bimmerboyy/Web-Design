/*Napraviti klasu Automobil sa sledećim atributima: šifra, naziv, vektor URL adresa slika automobila (apsolutne ili relativne adrese)
, cena, kilometraža, snaga motora (broj), boja (string). Ova klasa sadrži i sledeće funkcije:
• Konstruktor koji postavlja sve atribute
Funkciju koja vrši validaciju artikla (ispituje da li su šifra, naziv prazni, ukoliko je bar jedan on njih prazan, vrača 0) ili cena
Funkciju za prikaz podataka o automobilu (slika sa leve strane, podaci sa desne strane), 
koja kao parametar ima ID elementa čijem će sadržaju biti dodati podaci.
Prikaz realizovati tako što treba napraviti DIV element koji će služiti kao kontejner u kome će biti smešteni svi potrebni podaci.
Zatim taj DIV element dodati navedenom HTML elementu.
Ispod HTML. elementa u kome se prikazuju automobili postaviti dva dugmeta. Prvo dugme učitava prethodnu sliku u nizu,
a drugo dugme učitava sledeću sliku u nizu (voditi računa da li postoji prethodna odnosno naredna slika).
Funkcionalnost dugmeta realizovati pomoću dve funkcije i globalnih atributa (koji pamte trenutni indeks slike niz automobila).
U veb stranu proizvoljnog izgleda učitati eksternu JS datoteku koja sadrži klasu Automobil, programskim putem dodati 10
automobila u niz. Svaki automobil treba imati bar 2 slike.*/

let nizAutomobila = [];

class Automobil {


    constructor(sifra, naziv, URL1, URL2, cena, kilometraza, snaga, boja) {
        this.sifra = sifra;
        this.naziv = naziv;
        this.image = new Image();
        this.image.URL1 = URL1;
        this.image.URL2 = URL2;
        this.image2 = new Image();
        this.image2.URL2 = URL2;
        this.cena = cena;
        this.kilometraza = kilometraza;
        this.snaga = snaga;
        this.boja = boja;
    }
    daLiSuPrazni() {
        if (this.sifra == null || this.naziv == null) {
            return 0;
        }
    }
    prikazPodataka() {
        //dodavanje podataka
        let leva = document.createElement("div");
        leva.classList.add("leva");
        let desna = document.createElement("div");
        desna.classList.add("desna");
        let dg = document.createElement("div");
        dg.classList.add("dg");
        dg.appendChild(leva);
        dg.appendChild(desna);
        document.body.appendChild(dg);

        let image = document.createElement('img');
        let image2 = document.createElement('img');
        image.src = this.image.URL1;

        image.style.width = "100%";
        let levaStrana = document.querySelector('.dg .leva');
        levaStrana.appendChild(image);
        let p = document.createElement('div');
        p.classList.add("podaci");
        p.innerHTML = `Sifra:${this.sifra} <br/> Naziv:${this.naziv} 
        <br/> Cena:${this.cena} <br/> Kilometraza:${this.kilometraza} <br/> Snaga:${this.snaga} <br/> Boja:${this.boja}`;
        let desnaStrana = document.querySelector('.dg .desna');
        desnaStrana.appendChild(p);

        //kreiranje buttona


        let prethodna = document.createElement('button');
        let sledeca = document.createElement('button');
        prethodna.textContent = 'Prethodna';
        sledeca.textContent = 'Sledeca';
        prethodna.style.marginRight = '20px';

        document.body.appendChild(prethodna);
        document.body.appendChild(sledeca);

        prethodna.addEventListener('click', promeniUnazad);
        sledeca.addEventListener('click', promeniUnapred);

        let sifraAuta = this.sifra;
        let drugaSlika = this.image.URL2;
        let nizSlika = [];

        function promeniUnazad() {

            for (let i = 0; i < nizAuta.length; i++) {
                if (nizAuta[i].sifra === sifraAuta) {
                    image.remove();
                    nizAuta[i].image2.setAttribute('src', drugaSlika);
                    nizAuta[i].image2.style.width = "900px";
                    levaStrana.appendChild(nizAuta[i].image2);
                }

            }
        }

        function promeniUnapred() {

            for (let i = 0; i < nizAuta.length; i++) {

                if (nizAuta[i].sifra === sifraAuta) {

                    nizAuta[i].image2.remove();
                    levaStrana.appendChild(image);
                }

            }
        }
    }

}

let auto1 = new Automobil(1, 'BMW', '../avgust-2020/BMW-M3-E30-Redux.jpg', '../avgust-2020/1-BMW-E30-M3-by-Redux.jpg', '100000', '35000', 280, 'crna');
let auto2 = new Automobil(2, 'Mercedes', '../avgust-2020/auto2.jpg', '../avgust-2020/s-klasa.jpg', '130000', '15000', 450, 'siva');
let auto3 = new Automobil(3, 'Audi', '../avgust-2020/audi-a6-1.jpg', '../avgust-2020/audi-a6-2.jpg', '70000', '120000', 420, 'plava');
let nizAuta = [auto1, auto2, auto3];



auto3.prikazPodataka();