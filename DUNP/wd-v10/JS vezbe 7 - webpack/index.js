import Servic from "./src/service";

const service = new Service();
service.getAllPlanets();

//Igrac unsoi 2 vrednosti kockica (kroz dva elementa za unos teksta).
//Pritiskom na dugme "IGRAJ" proverava da li je zbir isti kao zbir
//kockica sa API

function igraj() {

    //pokupi brojeve koje je uneo korisnik
    const prvi = document.getElementById("prvi").value;
    const drugi = document.getElementById("drugi").value;

    //izracuna  njihov zbir
    const zbir = Number(prvi) + Number(drugi);
    //pozove api call ka nasem serveru
    const zbirAPI = service.getSum();
    //uporede i ispise rezultat
    if (zbirAPI == zbir) {
        brojPogodaka++;
        console.log("Broj pogodaka " + brojPogodaka);
    }
    //ako je korisnik pogodio sumu onda da se poveca broj pogodjenih

}


//API vraca vrednsoti 2 kocke