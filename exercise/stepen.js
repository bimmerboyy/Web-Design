// let broj = prompt("Unesite broj:");
// let eksponent = prompt("Unesite eksponent:");

let stepen = (broj,eksponent) => {
    let pom = 1;
    for(let i = 0; i < eksponent.length; i++) {
        pom *= broj;
    }
    return pom;
};


