function ucitajBroj() {


    var br = prompt("Unesite jedan broj");

    try {
        if (br === "")
            throw ("Uneti broj je prazan string");
        const num = Number(br);
        if (isNaN(num))
            throw ("Nije unet ispravan string za broj");
    } catch (error) {
        console.log("ERROR: " + error);
    }
}

function ucitajKorisnickoIme() {
    const ime = prompt("Ucitaj jedno korsinicko ime");
    try {
        if (ime === "")
            throw ("Ime je obavezno polje");
        if (ime.lenght <= 6)
            throw ("Ime mora imati najmanje 6 karaktera");
    } catch (error) {
        console.log("ERROR: " + error);

    }
}
// ucitajBroj();
ucitajKorisnickoIme();