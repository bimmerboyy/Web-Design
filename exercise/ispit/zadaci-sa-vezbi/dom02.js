//napravi formu za ime i sifru zatim vrsi proveru tako da ime mora da pocinje velikim slovom i da ima 5 slova
//sifra min 6 cifara slova


function proveri() {
    let name = document.querySelector("#name").value;
    let password = document.querySelector("#password").value;
    let nameUzorak = /^([A-Z]{1})([a-z]{4,})$/
    let passwordUzorak = /^\w{6,}$/

    if (nameUzorak.test(name) && passwordUzorak.test(password)) {
        alert("Podaci su dobro uneti");
    } else {
        alert("Unesi ponovo");
    }

}