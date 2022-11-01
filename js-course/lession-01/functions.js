let nekretnine = {
    stan: "70000",
    kuca: "150000",
    plac: "30000"
};

function racunanjeMjesecneRate(godine, vrstaNekretnine, ) {
    let mjeseci = godine * 12;
    let rata = nekretnine[vrstaNekretnine] / mjeseci;
    rata = rata.toFixed(0);

    console.log(rata);

}
//Proracun za stan na 15 godina
racunanjeMjesecneRate(15, "stan");
//Proracun za plac na 5 godina
racunanjeMjesecneRate(5, "plac");
//Proracun za kucu na 20 godina
racunanjeMjesecneRate(20, "kuca");






/*

// STAN
let godine = 10;
let mjeseci = godine * 12; // npr hocemo da placamo na rate 10 godina

let rata = nekretnine.stan / mjeseci;
rata = rata.toFixed(0); //stavlja ratu na 0 decimala tj ceo broj



console.log("mjeseci: " + mjeseci);
console.log(rata + " eura");
console.log(`Mjesecna rata na stan iznosi ${rata} eura za ${godine} goidna\n`);

//----------------------------------------------------------------

// PLAC

godine = 5;
mjeseci = godine * 12;
rata = nekretnine.plac / mjeseci;

rata = rata.toFixed(0);

console.log("----------------------------------------------------------------");
console.log(`\nMjesecna rata na plac iznosi ${rata} eura za ${godine} goidna`);

//----------------------------------------------------------------

// KUCA

godine = 20;
mjeseci = godine * 12;
rata = nekretnine.kuca / mjeseci;

rata = rata.toFixed(0);

console.log("----------------------------------------------------------------");
console.log(`\nMjesecna rata na kucu iznosi ${rata} eura za ${godine} goidna`);

*/