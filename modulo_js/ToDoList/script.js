

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas() {
    listElement.innerHTML = "";

    tarefas.map((todo) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        liElement.appendChild(tarefaText);
        listElement.appendChild(liElement);

    })
}

function adicionarTarefas() {
    if (inputElement.value === '') {
        alert("Digite alguma tarefa");
        return false;
    } else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();

    }

}

buttonElement.onclick = adicionarTarefas;