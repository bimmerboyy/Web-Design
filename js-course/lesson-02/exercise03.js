function validacija() {
    let input = document.querySelector("#email");
    let value = input.value;
    if (value.includes("@") && value.includes(".")) {
        console.log("validan mejl");

        let pozicijaAt = value.indexOf("@");
        let pozicijaTacka = value.indexOf(".");
        let izmedjuAtTacka = value.substring(pozicijaAt + 1, pozicijaTacka);


        if (izmedjuAtTacka.length > 0) {
            console.log("Dobro je");
        } else {
            console.log("Nije dobro");
        }



    } else {
        console.log("Mejl nije validan");
    }
}