/*
Napraviti funkciju ciji su argumenti dva stringa i koja vraca true ako se jedan od njih nalazi 
na kraju onog drugog.Karakter * u stringovima menja bilo koji znak.
*/

//Npr 

let proveraKrajaStringova = (prviString,drugiString) => {
   prviString = prviString.split("").reverse().join("");
   drugiString = drugiString.split("").reverse().join("");

    for (let i = 0; i < drugiString.length;i++) {
       if(prviString[i] !== drugiString[i] && prviString[i] !== "*" && drugiString[i] !== "*") {
            return false;
        }
    }
    return true;
};

console.log(proveraKrajaStringova("prvitim","tim"));
