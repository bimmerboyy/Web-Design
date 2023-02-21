async function getWord() {
    let result = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
    let data = result.json();
    console.log(data);
    // [0].meanings[0].partOfSpeech
}
let word;
let input = document.querySelector('.search-part input');
let search = document.querySelector('.search-part .search');
// let wordInput = document.querySelector('.word');
let showPart = document.querySelector('.show-part');



search.addEventListener("click", () => {
    word = input.value;
    try {
        if (word === "") {
            throw ("Unet je prazan string");
        }
    } catch (error) {
        alert("Error: " + error);
    }
    showPart.innerHTML = `
    <div class="word-div">
                <p class="word">${word}</p>
                <i class="fa-solid fa-volume-high"></i>
            </div>

            <p class="type">noun / ap(e)l/</p>
            <p class="description">The round fruit of a tree the rose family</p>
            <p class="word-meaning">The round fruit of a tree the rose family The round fruit of a tree the rose family
            </p>
    `;
    getWord();


});