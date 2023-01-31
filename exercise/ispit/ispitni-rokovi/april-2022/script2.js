let seconds = 00;
let tens = 00;

let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");
let igracNaRedu = document.getElementById("igracNaRedu");

let indexIgraca = 0;
let interval;

buttonStop.disabled = true;

let data = JSON.parse(localStorage.getItem("data"));
let nizImena = data.map((igrac) => igrac.ime);
igracNaRedu.innerHTML = nizImena[indexIgraca];

let startTimer = () => {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
};

buttonStart.addEventListener("click", () => {
    interval = setInterval(startTimer, 10);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
});

buttonStop.addEventListener("click", () => {
    clearInterval(interval);

    buttonStop.disabled = true;
    buttonStart.disabled = false;

    data[indexIgraca].vreme.seconds = seconds;
    data[indexIgraca].vreme.tens = tens;

    if (indexIgraca === nizImena.length - 1) {
        localStorage.setItem("data", JSON.stringify(data));
        alert("Kraj igre");
        buttonStart.disabled = true;
        return;
    }

    seconds = "00";
    tens = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;

    indexIgraca++;
    igracNaRedu.innerHTML = nizImena[indexIgraca];
});

buttonReset.addEventListener("click", () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
    localStorage.setItem(
        "data",
        JSON.stringify(
            nizImena.map((ime) => ({ ime, vreme: { seconds: 0, tens: 0 } }))
        )
    );
    indexIgraca = 0;
    igracNaRedu.innerHTML = nizImena[indexIgraca];
    buttonStart.disabled = false;
    buttonStop.disabled = true;
});
