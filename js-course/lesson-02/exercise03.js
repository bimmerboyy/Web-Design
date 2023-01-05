function validacija() {
    let input = document.querySelector("#email");
    let value = input.value;
    if (value.includes("@") && value.includes(".")) {
        console.log("validan mejl");

        let pozicijaAt = value.indexOf("@");
        let pozicijaTacka = value.indexOf(".");
        let izmedjuAtTacka = value.substring(pozicijaAt + 1, pozicijaTacka);


        if (izmedjuAtTacka.length > 0) {
            let prijeAt = value.substring(0, pozicijaAt);
            if (prijeAt.length > 2) {
                let posleTacke = value.substring(pozicijaTacka + 1, value.length);
                console.log(posleTacke);
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