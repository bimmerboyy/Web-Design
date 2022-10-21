//Osnove

// console.log("Pozdrav iz konzole")
//document.write("Pozdrav sa stranice")
// console.error("POzdrav iz konzole")
// console.warn("POzdrav iz konzole")
//window.open()

//Ovaj kod ce da uzme div sa id="poruka" i u njega da upise
//tekst "Pozdrav!!"
// document.getElementById('poruka').innerrText = 'Pozdrav!!'



// window.alert("Pozdrav iz Popup-a")
// console.log("B" + "A" + +"G" + "A")


//Varijable i manipulacija istim

// let cysecor = "Subscribe na moj kanal";

// let godine = "5";

// let mjesec = 3;

// let rezultat = mjesec + godine;

// let CysecorBrojSubs = "Cysecor ima 45k subs";

// console.log(typeof(godine));

// let nekiBroj = 65;

// let drugiBroj = "5";

// console.log(typeof(drugiBroj)); //string

// drugiBroj = parseInt(drugiBroj);

// console.log(drugiBroj); //number

// console.log(typeof(drugiBroj));

// let rezultat = nekiBroj + drugiBroj;
// console.log(rezultat); //70

//Zamena mesta dveju varijabli

// let prviBroj = 5;
// let drugiBroj = 10;

// console.log("Prvi broj:" + prviBroj);
// console.log("Drugi broj:" + drugiBroj);

// let treciTmp;

// treciTmp = prviBroj;
// prviBroj = drugiBroj;
// drugiBroj = treciTmp;
// console.log("Prvi broj:" + prviBroj);
// console.log("Drugi broj:" + drugiBroj);

//Nacini ispisivanja varijabli u konzoli

let ime = "Cysecor";
let prezime = "Sigurnost";
let godine = 18;

console.log(ime);
console.log(prezime);
console.log(godine);

let recenica = "Ja sam " + ime + " imam " + godine + " godina.";

console.log(recenica);

console.log("Ja sam " + ime + " imam " + godine + " godina.");

console.log("Ove godine imam " + godine + " godina.");

godine++;

recenica = "Sledece godine cu imati " + godine + " godina.";

console.log(recenica);

godine -= 2;

recenica = "Prosle godine sam imao " + godine + " godina.";

console.log(recenica);