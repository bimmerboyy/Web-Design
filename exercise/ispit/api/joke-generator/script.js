async function getRandomJoke() {
    let result = await fetch("https://official-joke-api.appspot.com/random_joke");
    data = await result.json();
    console.log(data);
    question.innerText = data.setup;
    answer.innerText = data.punchline;


}



let joke = document.querySelector(".joke");
let question = joke.querySelector(".question");
let answer = joke.querySelector(".answer");
let getJoke = document.querySelector(".get-random-joke");

getJoke.addEventListener("click", () => {

    getRandomJoke();
});




// let request = new XMLHttpRequest();
// request.open('GET', 'https://official-joke-api.appspot.com/random_joke');
// request.send();
// request.onload = () => {
//     if (request.status === 200) {
//         console.log(request.response);
//     }
// };