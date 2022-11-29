/*Unsite 5 imena studenata,zatim uklonite:
1.prvo ime
2. poslednje ime
3.trece ime
4.dodajte na pocetku ime
5.na kraju ime
6.na trecem mestu ime
7.umesto drugog i terceg dodati 2 nova imena 
*/

let studenti = ["Tarik","Nikola","Aldin","Benjamin","Amina"];

studenti.shift();
studenti.pop();
studenti.splice(2,1);
studenti.unshift("Abit");
studenti.push("Ela");
studenti.splice(2,0,"Osman");
studenti.splice(1,2,"Emin","Enesa");

console.log(studenti);