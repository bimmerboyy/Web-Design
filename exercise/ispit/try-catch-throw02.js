//Napraviti funkciju za unos broja i ispitati da li je unet prazan string posle proveravamo da li je
//unet ispravan string za broj i uhvatiti tu gresku  zatim napraviti funkciju za ucitavanje 
//korisnickog imena i proveriti da li je unet prazan string i mora imati 6 karaktera

function unesiBroj() {
    let broj = prompt("Unesi ispravan broj");
    try {
        if (broj == "") {
            throw ("Unet je prazan string");
        }
        let number = Number(broj);
        if (isNaN(number)) {
            throw ("Unet je neispravan string za broj");
        }
    } catch (err) {
        console.log("Error: " + err);
    }
}

function unesiKorisnickoIme() {
    let name = prompt("Unesi korisnicko ime");
    try {
        if (name == "") {
            throw ("Unet je prazan string");
        }
        if (name.length < 6) {
            throw ("Ime mora da ima najmanje 6 karaktera");
        }
    } catch (err) {
        console.log("Error: " + err);
    }
}

// unesiBroj();

unesiKorisnickoIme();