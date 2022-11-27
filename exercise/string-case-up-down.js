/*
Napisite funkciju koja ima parametar i koja vraca string koji se dobija sledecom promenom parametra:

a)Svi samoglasnici se pretvaraju u velika slova

b)Svi samoglasnici se pretvaraju u mala slova

c)ostali znaci u stringu ostaju nepromenjeni.
*/ 

let tekst = "Nikola je vegan i vozi reno megan";
let samoglasnici = ["a","e","i","o","u"]
let pretvaranje = (tekst) =>{
   tekst = tekst.toLowerCase();
   let noviString = "";
   for(let i = 0;i < tekst.length;i++){
    if(samoglasnici.indexOf(tekst[i]) != -1){
        noviString += tekst[i].toUpperCase();
    }
    else{
        noviString += tekst[i].toLowerCase();
    }
}
return noviString;
}

console.log(pretvaranje(tekst));

