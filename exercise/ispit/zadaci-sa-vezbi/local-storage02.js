// let button = document.querySelector('button');
// let input = document.querySelector('input');

// button.addEventListener('click', () => {
//     localStorage.setItem('name', '');

//     let name = localStorage.getItem('name');
//     name.push(input.value);


// });

let inpKey = document.getElementById('inpKey');
let inpValue = document.getElementById('inpValue');
let btnInsert = document.getElementById('btnInsert');
let lsOutput = document.getElementById('lsOutput');

btnInsert.addEventListener('click', () => {
    let key = inpKey.value;
    let value = inpValue.value;

    console.log(key);
    console.log(value);
    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }

});

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    lsOutput.innerHTML += `${key}:${value} <br/>`;
}