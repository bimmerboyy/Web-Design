let toDoList = document.querySelector("input")
let todo = document.querySelector("#todo");

//da bude na enter, nebitna stvar totoalno
toDoList.addEventListener("keydown", function(e) {
    if (e.key == "Enter") dodaj();
})


function dodaj() {
    let tekst = toDoList.value;
    let newTodo = document.createElement("DIV");
    newTodo.textContent = tekst;
    todo.appendChild(newTodo);
    toDoList.value = ""
    newTodo.onclick = todoSelected;
    let x = document.createElement("DIV");
    x.textContent = "✕";
    newTodo.appendChild(x);
    x.classList.add("x");
    x.onclick = obrisi;
}

function todoSelected() {
    this.classList.toggle("finished");
}

function obrisi() {
    this.parentElement.remove();
}