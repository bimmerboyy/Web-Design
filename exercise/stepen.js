// let broj = prompt("Unesite broj:");
// let eksponent = prompt("Unesite eksponent:");

let stepen = (broj,eksponent) => {
    let pom = 1;
    for(let i = 0; i < eksponent; i++) {
        pom *= broj;
    }
    return pom;
};

console.log(stepen(2,5));
