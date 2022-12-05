/*
Napisati funkciju koja za dato n,ispisuje prvih n kvadrata neparnih prirodnih brojeva.Na primer,za n = 2,treba da ispise 1 i 9

 */

let neparnihKvadrataOdN = n =>{
    let noviNiz = [];
    for(let i = 1;i <= n;i++){
        if(i & 1){
            noviNiz.push(i);
        }
    }
    return noviNiz.map(element => Math.pow(element, 2));
};

console.log(neparnihKvadrataOdN(3));

