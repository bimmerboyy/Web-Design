/*
Napraviti funkciju ciji su argumenti dva stringa i koja vraca true ako se jedan od njih nalazi 
na kraju onog drugog.Karakter * u stringovima menja bilo koji znak.
*/

//Npr 

let proveraKrajaStringova = (str1,str2) => {
    str1.reverse();
    str2.reverse();
    for (let i = 0; i < str1.length;i++) {
        while(str1[i] === str2[i]){
            let prvaRec = str1[i];
            let drugaRec = str2[i];
        }
        if(prvaRec === drugaRec) {
            return true;
        }
        else{
            return false;
        }
    }
};

console.log(proveraKrajaStringova("prvitim","drugitim"));
