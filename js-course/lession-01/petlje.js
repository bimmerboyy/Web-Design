// let novcanice = 25; // 25 novacnica 

// let vrijednostNovcanice = 10; // 10 eura

//brojac

// let brojac = 0;

// izbrojane novacnice

let izbrojaneNovcanice = 0;

//broji novcanice sve dok
//je brojac manji od broja novcanica

// while (izbrojaneNovcanice < novcanice) {
//     izbrojaneNovcanice++;

// }
// console.log(izbrojaneNovcanice * vrijednostNovcanice);

//Ukoliko su novcanice razlicite vrijednosti mozemo da koristimo niz

let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50, 5, 10, 20];

let brojNovcanica = novcanice.length;
// let brojac = 0;

// while (brojac < brojNovcanica) {
//     console.log("---------------");
//     console.log("Uslov prosao");
//     console.log(`Novacanica na poziciji [${brojac}]: ${novcanice[brojac]}`);
//     console.log(novcanice[brojac]);
//     brojac++;
// }
// console.log("## KRAJ PETLJE ##")

// if (brojac < brojNovcanica) {
//     console.log("Brojac je manji od broja nnovacnica ");
// } else {
//     console.log("Brojac nije manji od broja novacnica ");

// }
// console.log(`brojac:${brojac}`);
// while (izbrojaneNovcanice < brojNovcanica) {
//     izbr ojaneNovcanice++;

// }

//for petlja

// let ukupnoNovca = 0;

// for (let brojac = 0; brojac < brojNovcanica; brojac++)
//Moze isto da se napise for(let brojac in novcanice) ili bez brojaca
//for(let novacnica in novcanice){
// console.log(novcanica);
//}
// {
//     console.log(novcanice[brojac]);
//     ukupnoNovca += novcanice[brojac];
// }
// console.log("## KRAJ PETLJE ##")

// console.log(`Ukupno imamo ${ukupnoNovca} eura.`)

let autombili = ["Audi", "BMW", "Porsche", "Mercedes"];

// for (let automobil of autombili) {
//     console.log(automobil);
// }

autombili.forEach(function(automobil) {
    console.log(automobil);

})