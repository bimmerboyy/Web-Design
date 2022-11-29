let niz = [54,76,35,14,7];

let sortiraj = niz =>{
    niz.sort((a,b) => b - a);
    return niz;
};

console.log(niz);
console.log(sortiraj(niz));