function validacija() {
    let emailValidation = /^([\w\.-]+)@([\w-]+)\.([\D]{2,8})(\.[\D]{2,8})?$/;
    let email = prompt("Unesite email");
    email = email.match(emailValidation);
    if (email != null) {
        console.log("Uneli ste ispravan mejl");
    } else {
        console.log("Uneli ste neispravan mejl");
    }
}
validacija();