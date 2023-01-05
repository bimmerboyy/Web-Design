function addToCart(element) {
    let mainEl = element.closest(".single-item");
    let input = element.previousElementSibling;
    let price = mainEl.querySelector(".price").innerText;
    let name = mainEl.querySelector("h3").innerText;
    let quantity = mainEl.querySelector("input").value;
    let cartItems = document.querySelectorAll(".cart-items");

    cartItems.innerHTML = "Dodato " + name;

    console.log(quantity);
}