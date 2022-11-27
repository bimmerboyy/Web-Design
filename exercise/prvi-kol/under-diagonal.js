/*Napisati program koji odredjuje srednju vrednost elemenata ispod glavne dijagonale kvadratne matrice */

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

let odredjivanjeSrednjeVrednosti = matrix =>{
    let srednjaVrednost = 0;
    let brojac = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
           if(i > j){
            srednjaVrednost += matrix[i][j];
            brojac++;
           }
        }
    }
    return srednjaVrednost/brojac;
};
console.log(odredjivanjeSrednjeVrednosti(matrix));