let nekretnine = {
    stan: "70000",
    kuca: "150000",
    plac: "30000"
};

// STAN
let godine = 10;
let mjeseci = godine * 12; // npr hocemo da placamo na rate 10 godina

let rata = nekretnine.stan / mjeseci;
rata = rata.toFixed(0); //stavlja ratu na 0 decimala tj ceo broj



console.log("mjeseci: " + mjeseci);
console.log(rata + " eura");
console.log(`Mjesecna rata na stan iznosi ${rata} eura za ${godine} goidna`);

//----------------------------------------------------------------

// PLAC

godine = 5;
mjeseci = godine * 12;