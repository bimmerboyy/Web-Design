//Zameniti uzorak u stringu

console.log("Upotrebom g na uzorku\n");
let uzorak1 = /HTML/g // g - globalna primena - vrsi se zamena svakog uzorka koji se nadje u okviru stringa.
let tekst1 = "HTML nije programski jezik.HTML ne treba da se uci na predmetu Racunarska Tehnika " + " HTML je jednostavan jezik";

let zamena1 = tekst1.replace(uzorak1, "JAVA");

console.log("Zamenili smo uzorak i sada string izgleda ovako:\n " + zamena1);


console.log("Upotrebom gi na uzorku\n");

let uzorak2 = /HTML/gi // g - globalna primena - vrsi se zamena svakog uzorka koji se nadje u okviru stringa.
let tekst2 = "HTML nije programski jezik.HTML ne treba da se uci na predmetu Racunarska Tehnika " + " HTML je jednostavan jezik";

let zamena2 = tekst1.replace(uzorak2, "JAVA");

console.log("Zamenili smo uzorak i sada string izgleda ovako: \n" + zamena2);