// telefon koji se unosi treba da bude u nekom od sledecih oblika:
// 10 cifara
// 3 cifre - 3 cifre - 4 cifre
// (3 cifre) 3 cifre - 4 cifre

function proveri() {
    let brTelefona = prompt("Unesi broj telefona");
    let validacijaBroja = /^(\d{10})|(\d{3}-\d{3}-\d{4})|(\(\d{3}\)-\d{3}-\d{4})$/;
    let provera = brTelefona.match(validacijaBroja);
    if (provera != null) {
        console.log("Broj telefona je ispravan");
    } else {
        console.log("Broj telefona je neispravan");
    }
}
proveri();