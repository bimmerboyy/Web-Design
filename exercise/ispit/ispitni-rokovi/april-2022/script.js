/*4 [301) Napraviti 3 html stranice koje predstavljaju sistem za igranje igre: Prva stranica (slika1)
predstavlja postavku igre. Poseduje formu na kojoj korisnik ima mogućnost da unese novog igrača u igru.
Pritiskom na dugme "Dodaj" proverava se da li je korisnik uneo korisničko ime. Ukoliko jeste,
igrač sa datim korisničkim imenom se dodaje u igru. Ukoliko nije, korisniku se ispisuje odgovarajuća poruka
u iskačućem prozoru. Pretpostavka je da se neće dodavati igrači sa istim imenima.

U igri učestvuje pet igrača. Kada se doda peti igrač, pokušaj dodavanja novog igrača treba
da bude neuspešan, a korisniku treba da se ispiše odgovarajuća poruka. Na stranici postoji
navigacioni bar. Linkovi ka stranicama za igru rezultate treba da budu onemogućeni sve dok
ne bude uneto pet igrača. U svakom trenutku korisnik može da resetuje postavku klikom na odgovarajuće dugme.
Tada se svi igrači britu iz igre progresni bar se resetuje na početnu poziciju. Prilikom osvežavanja stranice,
postavka se automatski resetuje. Druga stranica (slika2) predstavlja igru. Stranica sadrži tekstualno polje i
dugmad Start" i Stop" koje predstavljaju štopericu. Na početku je dugme Stop" onemogućeno. Pritiskom na dugme Start
Stoperica kreće da odbrojava, onemogućava se ponovni klik na dugme "Start" a omogućava se klik na dugme Stop"
Tekstualno polje prikazuje trenutno vreme štoperice na svaku odbrojanu stotinku


Pritiskom na dugme Stop" Stoperica se zaustavlja, onemogućava se ponovni klik na dugme Stop, a omogućava se klik na dugme
Start Igrači igraju redom po redosledu dodavanja u igru. Pri učitavanju stranice, korisniku se u iskačučem prozoru navodi
koji igrač započinje igru. Kada igrač pritisne dugme Stop", njegovo vreme se čuva, i korisniku se u iskačucem prozoru navodi
koji igrač je sledeči na redu. Cilj igre je stopirati štopericu što bliže vremenu od 3 sekunde, bez prekoračenja. Nakon što
svi igrači odigraju igru, oba dugmeta treba da budu onemogućena.


U svakom trenutku korisnik preko navigacionog bara može da se vrati na stranicu sa postavkom ili da prikaže stranicu
sa rezultatima. Prilikom povratka sa stranice sa rezultatima na stranicu sa igrom, igra treba da nastavi od igrača koji
je bio na potezu Treca stranica (slika3) predstavlja stranicu sa rezultatima. Sadrži tabelu u kojoj se redom ispisuju imena
svih igrača, vremena onih igrača koji su do tog trenutka odigrali svoj potez dodatne informacije o igraču */

let input = document.querySelector("#igraci");
let dodaj = document.querySelector("#dodaj");
let nizImena = [];
let igra = document.querySelector("#igra");
let rezultati = document.querySelector("#rezultati");
let resetBtn = document.querySelector("#reset");

dodaj.addEventListener("click", () => {
    let ime = input.value;

    if (nizImena.length > 4) {
        alert("Maksimalan broj igrača je 5");
        dodaj.disabled = true;
        return;
    }

    if (ime === "") {
        alert("Unesite korisnicko ime");
    }

    if (nizImena.includes(ime)) {
        alert("Korisnicko ime je vec uneto");
        return;
    }

    let validacijaImena = /^([a-z]+[\d]+)$/;
    let provera = ime.match(validacijaImena);
    if (!provera) {
        alert("Korisnicko ime nije ispravno");
        return;
    }

    nizImena.push(ime);

    if (nizImena.length === 5) {
        igra.style.pointerEvents = "auto";
        rezultati.style.pointerEvents = "auto";

        localStorage.setItem(
            "data",
            JSON.stringify(
                nizImena.map((ime) => ({ ime, vreme: { seconds: 0, tens: 0 } }))
            )
        );

        // Radi isto:
        // let data = []

        // nizImena.forEach(ime => {
        //     data.push ( { ime, vreme: {seconds: 0,  tens: 0}  })
        // })
        // let jsonData = JSON.stringify(data);
        // localStorage.setItem("data", data);
    }
});

resetBtn.addEventListener("click", reset);

function reset() {
    nizImena = [];
    dodaj.disabled = false;
    igra.style.pointerEvents = "none";
    rezultati.style.pointerEvents = "none";
    localStorage.removeItem("data");
}

reset();

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        dodaj.click();
    }
});