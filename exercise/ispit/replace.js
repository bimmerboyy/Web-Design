//Zameniti uzorak u stringu

let uzorak1 = /HTML/g // g - globalna primena - vrsi se zamena svakog uzorka koji se nadje u okviru stringa
let tekst1 = "HTML nije programski jezik";

let zamena1 = tekst1.replace(uzorak1, "JAVA");

console.log("Zamenili smo uzorak i sada string izgleda ovako: " + zamena1);