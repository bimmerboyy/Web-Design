/*
*
**
***
****
*/

let n = prompt("Unesite n:");

let pattern = n =>{
    for(let row = 0; row < n; row++){ //Prvo gledamo koliko linija imamo u samom patternu 
         //za svaki red vazi toliko kolona
         for(col = 1;col <= row;col++){
           document.write("* ");
         }
         //kada smo ispisali jedan red stavljamo novi red <br>
         document.write("<br>");
    }
}


doucument.write(pattern(4));