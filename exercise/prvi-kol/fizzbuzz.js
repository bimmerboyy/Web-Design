/*Прво, да скинемо ово са пута, ФиззБузз је задатак у којем се од програмера тражи да одштампа бројеве од 1 до 100, али ево кваке, умножак од три треба да штампа „Физз“ и слично одштампа „Бузз“ за више од 5 и на крају одштампајте „ФиззБузз“ за вишекратнике три и пет.

Иако ово последње може изгледати једноставно, чак и искусни програмери понекад погреше логику.*/

//prvi nacin
/*

let niz = [];
let fizz = "FIZZ";
let buzz = "BUZZ";
for(let i = 1;i <= 100;i++){
   if(i % 3 == 0){
      niz[i] = fizz;
   }
   else if(i % 5 == 0){
      niz[i] = buzz;
   }
   else{
      niz[i] = i;
   }
    
    
}
for(i = 0;i < 100;i++){
    console.log(niz[i]);
}
*/

//drugi nacin

let niz = [];

for(let i = 1;i <= 100;i++){
    if(i % 3 == 0){
       niz[i].push("FIZZ");
    }
    else if(i % 5 == 0){
        niz[i].push("BUZZ");

    }
    else{
            niz[i] = i;
        }
}
