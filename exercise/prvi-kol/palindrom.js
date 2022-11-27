//Palindorm

//Npr ABCDCBA madam

// anavolimilovana


let palindrom = prompt("Unesite niz karaktera");

let daLiJePalindrom = palindrom =>{
    
   return palindrom.split("").reverse().join("").toLowerCase() === palindrom.toLowerCase();
};

document.getElementById("palindrom").textContent = daLiJePalindrom(palindrom);

// let daLiJePalindrom = (...palindrom) =>{
//     for(let i = 0;i < palindrom.length/2;i++){
//         let prviNiz = palindrom[i];
//         let zajednicki1 = palindrom[(palindrom.length/2) + 1];
//     }
//     for(let i = (palindrom.length/2) + 2;i < palindrom.length;i++){
//         let drugiNiz = palindrom[i];
//         let zajednicki2 = [(palindrom.length/2) + 1];
//     }
//     for(let i = 0;i < palindrom.length;i++){
//         if(prviNiz[i] == drugiNiz[i] && zajednicki1 == zajednicki2){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// };

// if(daLiJePalindrom() == true){
//     document.write("JESTE PALINDROM");
// }
// else{
//     document.write("NIJE PALINDROM");
// }
