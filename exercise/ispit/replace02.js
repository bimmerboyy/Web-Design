//Naci sve godine 21 veka kada se odrzavala olimpijada

let uzorak = /2\d\d\d/g; // 2 i \d predstavlja brojeve od 0-9 


let oplimpijada = "1880-olimpijada 1987 1993 1996-olimpijada 1998 1995 2002 2005 2006" + "2008-olimpijada"

let zadateOlimpijade = oplimpijada.match(uzorak); // uzima sve uzorke i stavlja ih u niz

console.log("Olimpijade koje su se odrzavale u 21-om veku su " + zadateOlimpijade);