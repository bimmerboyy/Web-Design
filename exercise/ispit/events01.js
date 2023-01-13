//Dodati naslov i paragraf i dodati im event listenere onclick i doubleclick

let naslov = document.querySelector("h1");
let paragraf = document.querySelector("p");

naslov.addEventListener("click", () => {
    alert("Kliknuli ste na naslov");
});


naslov.addEventListener("dbclick", () => {
    console.log("Kliknuli ste dva puta na naslov na naslov");
});

paragraf.addEventListener("dblclick", () => {
    alert("Kliknuli ste dva puta na paragraf");
});