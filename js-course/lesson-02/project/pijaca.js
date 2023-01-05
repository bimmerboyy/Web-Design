let allTotal = 0;

function addToCart(element) {
    let mainEl = element.closest(".single-item");
    let input = element.previousElementSibling;
    let price = mainEl.querySelector(".price").innerText;
    let name = mainEl.querySelector("h3").innerText;
    let quantity = mainEl.querySelector("input").value;
    let cartItems = document.querySelector(".cart-items");
    console.log(typeof(quantity));
    if (parseInt(quantity) > 0) {
        price = price.substring(1);
        price = parseInt(price);
        let total = price * parseInt(quantity);

        allTotal += total;

        cartItems.innerHTML += `<div class="cart-single-item">
            <h3>${name}</h3>
            <p>$${price} x ${quantity} = $${total}</p>
            <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>

        </div>`;

        document.querySelector(".total").innerText = `Total: ${allTotal}`;


        element.innerText = "Dodato";
        element.setAttribute("disabled", "true");

    } else {
        alert("Odaberi kolicinu")
    }
    console.log(quantity);
}

function removeFromCart(element) {
    console.log("removing from cart");
}