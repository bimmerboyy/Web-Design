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
let brojac = 0;

while (brojac < brojNovcanica) {
    console.log("---------------");
    console.log("Uslov prosao");
    console.log(`Novacanica na poziciji [${brojac}]: ${novcanice[brojac]}`);
    console.log(novcanice[brojac]);
    brojac++;
}
// while (izbrojaneNovcanice < brojNovcanica) {
//     izbr ojaneNovcanice++;

// }