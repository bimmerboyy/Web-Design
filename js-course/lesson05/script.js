let textTag = document.querySelector(".section1 h1");
let text = textTag.textContent;

let splittedText = text.split("");

textTag.innerHTML = "";

for (let i = 0; i < splittedText.length; i++) {
    textTag.innerHTML += `<span>${splittedText[i]}</span>`
}

let k = 0;
let interval = setInterval(() => {
    let spans = textTag.querySelectorAll('span');
    console.log(spans[k]);
    let singleSpan = spans[k];

    singleSpan.className = "fadeMove";

    k++;

    if (k === spans.length) {
        clearInterval(interval);
    }
}, 1000);