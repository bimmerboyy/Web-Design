var datum = new Date();
var m = datum.getMonth();
window.alert("Trenutno smo u mesecu : " + nadjiMesecPrekoNiza(m) + ",ovaj mesec ima :" + brojDana(m) + " dana");

// TODO: funkcija koja vraca ime meseca na osnovu poslatog indeksa 0- Januar,1 - Februar...
function nadjiMesec(indeks) {
    let naziv = "";
    switch (indeks) {
        case 0:
            naziv = "Januar";
            break;
        case 1:
            naziv = "Februar";
            break;
        case 2:
            naziv = "Mart";
            break;
        case 3:
            naziv = "April";
            break;
        case 4:
            naziv = "Maj";
            break;
        case 5:
            naziv = "Jun";
            break;
        case 6:
            naziv = "Jul";
            break;
        case 7:
            naziv = "Avgus";
            break;
        case 8:
            naziv = "Septembar";
            break;
        case 9:
            naziv = "Oktobar";
            break;
        case 10:
            naziv = "Novembar";
            break;
        case 11:
            naziv = "Decembar";
            break;
    }
}

function nadjiMesecPrekoNiza(indeks) {
    let nizMeseci = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Septembar", "Oktobar", "Novembar", "Decembar"];
    return nizMeseci[indeks];
}

function brojDana(indeks) {
    let nizDana = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return nizDana[indkes];
}