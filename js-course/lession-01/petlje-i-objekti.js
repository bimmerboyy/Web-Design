let automobili = {
    audi: ["50000", "2017", "Q7"],
    bmw: ["60000", "2018", "330d"],
    porsche: ["70000", "2016", "Boxter"],
    mercedes: ["80000", "2019", "S400"]
};
for (automobil in automobili) {
    let podaciOvozilu = automobili[automobil];
    let naziv = automobil;
    // console.log(naziv);
    // console.log(podaciOvozilu);
    // console.log("--------------------------------");

    // console.log(`${naziv} model:${podaciOvozilu[2]} godiste:${podaciOvozilu[1]} i cena:${podaciOvozilu[0]} eura.`);

    // console.log(automobili["bmw"]) // jos jedan nacin za pristup podatcima objekta gde ce ispisati podatke za bmw
    //Ili mozemo napisati takodje:

    console.log(automobili.bmw);

}

let osoba = {
    ime: "Cysecor",
    prezime: "Sigurnost",
    godine: "12",
    grad: "Peking"

};