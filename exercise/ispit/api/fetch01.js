async function getRandomDog() {
    let result = await fetch("https://random.dog/woof.json");
    data = await result.json();
    dogSpan.style.display = "none";
    imageDog.src = data.url;
    dogImage.appendChild(imageDog);
}

let imageDog = document.createElement("img");



let dogImage = document.querySelector("#dog");
let dogSpan = dogImage.querySelector("span");
let catImage = document.querySelector("#cat");
let dogButton = document.querySelector(".dog-button");
let catButton = document.querySelector(".cat-button");
let catSpan = dogImage.querySelector("span");

dogButton.addEventListener("click", () => {
    getRandomDog();
    if (imageDog.length > 0) {
        imageDog.style.display = "none";

    }
});