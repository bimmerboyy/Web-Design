let niz = new Array(1,2,3,4,5);

let faktorijal = n => {
    if(n < 1){
        return 1;
    }
    else{
        return n * faktorijal(n - 1);
    }
};
let faktorijali = niz.map(element => faktorijal(element));
console.log(faktorijali);

// let faktorijal = n =>n < 1 ? 1 : n * faktorijal(n-1);
console.log(faktorijal(5));
