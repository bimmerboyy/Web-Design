//Dumgic u pocetku da pise klikni me, kada se klikne da pise klikni opet, nakon toga pise klikno samo jos jednom

let dugme = document.querySelector("button");
let br = 0;
dugme.addEventListener("click", () => {

    console.log(br);

    switch (br) {
        case 0:
            dugme.innerText = "Klikni me";
            break;
        case 1:
            dugme.innerText = "Klikni me opet!";
            break;
        case 2:
            dugme.innerText = "Klikni me samo jos jednom!";
            break;
    }
    br = (br + 1) % 3;

});