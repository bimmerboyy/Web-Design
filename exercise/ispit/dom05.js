function getValue() {
    let txt = document.querySelector("input").value;
    let result = document.querySelector(".count");
    result.innerText = txt;
}