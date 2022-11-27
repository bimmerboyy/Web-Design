//Oderditi da li je broj paran ili neparan

//I nacin

let paranIliNeparan = broj =>{
    if(broj == 0){
        return 0;
    }
    if(broj == 1){
        return 1;
    }
    else{
        return paranIliNeparan(broj - 2);
    }
}

// if(paranIliNeparan(99) == 0){
//     console.log("Broj je paran");
// }
// else{
//     console.log("Broj je neparan");
// }

//II nacin

// let paranIliNeparan = broj =>{
//     if(broj % 2 == 0){
//         return 0;
//     }
//     else return 1;
// }


//  if(paranIliNeparan(99) == 0){
//      console.log("Broj je paran");
//  }
//  else{
//      console.log("Broj je neparan");
//  }

