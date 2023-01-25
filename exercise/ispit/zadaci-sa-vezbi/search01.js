//Proveriti da li se uzorak nalazi u stringu

let uzorak = /Script/;

let tekst = "JavaScript je tezak za debagovanje";

search = tekst.search(uzorak);

console.log("Trazeni uzorak se nalazi na poziciji " + search);