/* Pomocu DOM-a napraviti tabelu kao sa slike.napraviti funkciju sortiraj koja ce klikom 
na dugme sortirati redove tabele i to od najmanje do najvece vrednosti godina.Napraviti veb 
stranicu koja testira rad ovog programa 
 */

let table = document.createElement('table');

let trZaglavlje = document.createElement('tr');
let imeIpretime = document.createElement('th');
let godine = document.createElement('th');
imeIpretime.innerHTML = "Ime i prezime";
godine.innerHTML = "Godine";
trZaglavlje.appendChild(imeIpretime);
trZaglavlje.appendChild(godine);
table.appendChild(trZaglavlje);
let firstPerson = document.createElement('tr');
let firstPersonName = document.createElement('td');
let firstPersonYears = document.createElement('td');
firstPersonYears.classList.add('years');
firstPersonName.innerHTML = "Marko Markovic";
firstPersonYears.innerHTML = "23";
firstPerson.appendChild(firstPersonName);
firstPerson.appendChild(firstPersonYears);
table.appendChild(firstPerson);


firstPerson.style.backgroundColor = "gray";



let secondPerson = document.createElement('tr');
let secondPersonName = document.createElement('td');
let secondPersonYears = document.createElement('td');
secondPersonName.innerHTML = "Petar Petrovic";
secondPersonYears.innerHTML = "27";
secondPerson.appendChild(secondPersonName);
secondPerson.appendChild(secondPersonYears);
table.appendChild(secondPerson);
secondPersonYears.classList.add('years');





let thirdPerson = document.createElement('tr');
let thirdPersonName = document.createElement('td');
let thirdPersonYears = document.createElement('td');
thirdPersonName.innerHTML = "Hako Hakovic";
thirdPersonYears.innerHTML = "72";
thirdPerson.appendChild(thirdPersonName);
thirdPerson.appendChild(thirdPersonYears);
table.appendChild(thirdPerson);

thirdPerson.style.backgroundColor = "gray";
thirdPersonYears.classList.add('years');

let fourthPerson = document.createElement('tr');
let fourthPersonName = document.createElement('td');
let fourthPersonYears = document.createElement('td');
fourthPersonName.innerHTML = "Jovan Jovanovic";
fourthPersonYears.innerHTML = "35";
fourthPerson.appendChild(fourthPersonName);
fourthPerson.appendChild(fourthPersonYears);
table.appendChild(fourthPerson);
fourthPersonYears.classList.add('years');





let tableDiv = document.createElement('div');
tableDiv.appendChild(table);
let body = document.querySelector('body');
body.appendChild(tableDiv);

let buttonDiv = document.createElement('div');
let button = document.createElement('button');
button.innerText = "Klikni!";
buttonDiv.appendChild(button);
body.appendChild(buttonDiv);

tableDiv.style.marginBottom = "50px";
button.style.padding = "5px 30px";
button.style.backgroundColor = "gray";
button.style.cursor = "pointer";




table.style.border = '1px solid black';
table.style.width = '1000px';
table.style.height = '200px';

imeIpretime.style.textAlign = 'left';
godine.style.textAlign = 'left';

table.style.borderCollapse = 'collapse';

let years = document.querySelectorAll('.years');
let array = [];

button.addEventListener("click", () => {
    years.forEach(year => {
        let yearValue = year.innerText;
        yearValue = parseInt(yearValue, 10);
        array.push(yearValue);
        array.sort();



    })

    years.forEach((year, index) => {
        firstPersonYears.innerHTML = array[0];
        secondPersonYears.innerHTML = array[1];
        thirdPersonYears.innerHTML = array[2];
        fourthPersonYears.innerHTML = array[3];
    })
});
let array2 = [];

button.addEventListener("click", () => {
    console.log("radi");
    years.forEach(year => {

        let yearValue = year.innerText;
        yearValue = parseInt(yearValue, 10);
        array2.push(yearValue);
        console.log(array2);


    })
    years.forEach(year => {
        firstPersonYears.innerHTML = array2[0];
        secondPersonYears.innerHTML = array2[1];
        thirdPersonYears.innerHTML = array2[2];
        fourthPersonYears.innerHTML = array2[3];
    });


})