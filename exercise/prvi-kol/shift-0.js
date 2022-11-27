/* Napraviti funkciju koja pomera sve nule u nizu celih brojeva na kraj datog niza.Nije dozvoljeno koriscenje pomocnog niza
*/

let niz = [1,2,0,0,4,0,5]; // [1,2,4,5,0,0,0]

let shiftovanjeNula = (niz) => {
    let obrisaneNule = 0;
    for (let i = 0; i < niz.length; i++){
        if(niz[i] === 0){
            niz.splice(i,1);
            obrisaneNule++;
            i--;
        }
    }
    for(let i = 0;i < obrisaneNule;i++){
        niz.push(0);
    }
    // niz.push(...Array(obrisaneNule).fill(0));
};

//II nacin

// let shiftovanjeNula = (niz) =>{
//     let niz2 = niz.filter(element => element != 0);
//     let obrisaneNule2 = niz.filter(element => element === 0);
//     niz = [...niz2,...obrisaneNule2];

//     console.log(niz);
// };


shiftovanjeNula(niz);
