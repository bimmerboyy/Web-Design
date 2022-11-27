/*
*
**
***
****
*/

let n = prompt("Unesite n:");

let pattern = n =>{
    for(let row = 1; row < n; row++){ //Prvo gledamo koliko linija imamo u samom patternu 
        //za svaki red vazi toliko kolona
        for(col = 1;col <= row;col++){
           document.wirte("* ");
        }
        //kada smo ispisali jedan red stavljamo novi red <br>
        document.wirte("<br>");
       
    }
}

