//Vratiti najduzu rec u stringu

let tekst = "The quick brown fox jumped over the lazy dog";

let najduzaRec = tekst =>{
    let niz = tekst.split(" ");
    let najduzaRec = 0;
    console.log(niz);
   niz.forEach(elem =>{
    if(elem.length > najduzaRec){
        najduzaRec = elem.length;
    }
   });
    return najduzaRec;
};

console.log(najduzaRec(tekst));
