let zivotinje = JSON.parse(localStorage.getItem("zivotinje"));

let tabela = document.querySelector("table");

for (let i = 0; i < zivotinje.length; i++) {
    if (zivotinje[i].tip === "izgubljena") {
        tabela.innerHTML += `

  <tr>
    <td>${zivotinje[i].vrsta}</td>
    <td>${zivotinje[i].boja}</td>
    <td>${zivotinje[i].ogrlica}</td>
    <td>${zivotinje[i].tip}</td>

  </tr>

        `
    }
}