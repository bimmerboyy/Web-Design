let seconds = 00;
let tens = 00;

let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('seconds');
let buttonStart = document.getElementById('start');
let buttonStop = document.getElementById('stop');
let buttonReset = document.getElementById('reset');

let interval;
buttonStop.disabled = true;

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
}



buttonStart.addEventListener("click", () => {
    interval = setInterval(startTimer);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
});

buttonStop.addEventListener("click", () => {
    clearInterval(interval);
    buttonStop.disabled = true;
    buttonStart.disabled = false;

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }
    let localSeconds = [];

    localSeconds = JSON.parse(localStorage.getItem('data'));
    localSeconds.push(appendSeconds.innerHTML);
    localStorage.setItem('localSeconds', JSON.stringify(localSeconds));



    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }
    let localTens = [];

    localTens = JSON.parse(localStorage.getItem('data'));
    localTens.push(appendTens.innerHTML);
    localStorage.setItem('localTens', JSON.stringify(localTens));
});

buttonReset.addEventListener("click", () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
});

if (localStorage.getItem('data') != null) {
    let data = [];
    let igrac = [];
    data.push(JSON.parse(localStorage.getItem('oldData')));
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }


}