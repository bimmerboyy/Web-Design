function validacija() {
    let input = document.querySelector("#email");
    let value = input.value;
    //Provjera da li value (string) sarzi @ i tacku
    if (value.includes("@") && value.includes(".")) {


        let pozicijaAt = value.indexOf("@"); //uzimamo poziciju @
        let pozicijaTacka = value.indexOf("."); // uzimamo poziciju tacke

        //uzima vrijednost izmedju pozciija. Ne ukljucuje poslednju poziciju
        let izmedjuAtTacka = value.substring(pozicijaAt + 1, pozicijaTacka);

        // da li izmedju tacke i @ imamo vise od nula karaktera
        if (izmedjuAtTacka.length > 0) {
            let prijeAt = value.substring(0, pozicijaAt);
            // da li prije @ imamo vise od dva karaktera
            if (prijeAt.length > 2) {
                let posleTacke = value.substring(pozicijaTacka + 1, value.length);
                //da li posle tacke imamo vise od 1 karaktera
                if (posleTacke.length > 1) {
                    console.log("Email je validan!");
                } else {
                    console.log("Mail nije validan");
                }
            } else {
                console.log("Mejl nije validan");
            }

        } else {
            console.log("Nije dobro");
        }



    } else {
        console.log("Mejl nije validan");
    }
}