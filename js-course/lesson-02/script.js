function pokreniMe(dugme){
    let nazivDugmeta = dugme.innerText;
    let klasaDugmeta = dugme.className;

    console.log(klasaDugmeta);

    let message = document.querySelector("#kliknutoDugme");
     message.innerText = nazivDugmeta + " " + klasaDugmeta;
    console.log(dugme);
}