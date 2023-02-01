/*Korisniku je potrebna šifra za Facebook. Napisati funkciju koja će formirati šifru od imena
korisnika koje on unosi, ali na pravilan način, tako da kasnije može lako da je se seti. Šifra se
kreira tako što se zamenjuje redosled prva dva slova imena, ostatak slova se ponavlja dva puta i
na kraju se dodaje broj slova imena korisnika. Na primer, ako je ime korisnika bilo petar, sifra
koju kreira program je eptartar5. Napraviti veb stranicu koja testira rad ove funkcije.*/

let input = document.querySelector('#unos');
let potvrdi = document.querySelector('#potvrdi');
let ime = [];



function napraviSifru() {
    ime = input.value.split("");
    let prviDeo = ime.slice(0, 2);
    let temp;
    for (let i = 0; i < prviDeo.length - 1; i++) {
        temp = prviDeo[i];
        prviDeo[i] = prviDeo[i + 1];
        prviDeo[i + 1] = temp;

    }

    let drugiDeo = ime.slice(2, ime.length);
    let duzina = ime.length;
    let novaSifra = prviDeo.join("") + drugiDeo.join("") + duzina;
    let p = document.createElement("p");
    p.innerHTML = "Vasa nova sifra je:" + novaSifra;
    document.body.appendChild(p);

}

potvrdi.addEventListener('click', napraviSifru);