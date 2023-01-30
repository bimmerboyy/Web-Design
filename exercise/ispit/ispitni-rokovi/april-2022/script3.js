let td = document.querySelectorAll("td");
let data = localStorage.getItem("data");

let table = document.querySelector("table");

let row1 = table.insertRow(1);

let c1 = row1.insertCell(0);


let row3 = table.insertRow(1);

let c3 = row3.insertCell(0);


let row4 = table.insertRow(1);

let c4 = row4.insertCell(0);


let row5 = table.insertRow(1);

let c5 = row5.insertCell(0);



let row2 = table.insertRow(1);

let c2 = row2.insertCell(0);




for (let i = 0; i < data.length; i++) {
    c1.innerText = localStorage.getItem("data");
    c2.innerText = data[i];
    c3.innerText = data[i];
    c4.innerText = data[i];
    c5.innerText = data[i];
}