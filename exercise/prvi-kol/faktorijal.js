
let faktorijal = n =>{
    return n <= 1? 1 : n * faktorijal(n - 1);
};
console.log(faktorijal(5));