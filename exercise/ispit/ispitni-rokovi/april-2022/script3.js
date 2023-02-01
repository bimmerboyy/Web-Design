let data = JSON.parse(localStorage.getItem("data"));

let table = document.querySelector("table");

data.forEach((igrac) => {
    let { ime, vreme } = igrac;
    let { seconds, tens } = vreme;
    let html = `
        <tr>
            <td>${ime}</td>
            <td>${seconds} : ${tens}</td>
        </tr>
    `;
    table.innerHTML += html;
});