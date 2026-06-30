let tasks = JSON.parse(localStorage.getItem("equilibrioTasks")) || [];

function save() {
    localStorage.setItem("equilibrioTasks", JSON.stringify(tasks));
}

function renderTasks() {

    const list = document.getElementById("taskList");

    if(tasks.length === 0){
        list.innerHTML = `<p class="empty">Todavía no hay tareas.</p>`;
        return;
    }

    list.innerHTML = "";

    tasks.forEach((task,index)=>{

        list.innerHTML += `
            <div class="task">
                <strong>${task.category}</strong><br>
                ${task.text}
                <button onclick="doneTask(${index})">✔️</button>
            </div>
        `;

    });

}

function selectCategory(category){

    newTask(category);

}

function newTask(category="General"){

    const text = prompt("Nueva tarea");

    if(!text) return;

    tasks.push({
        category,
        text
    });

    save();
    renderTasks();

}

function doneTask(index){

    tasks.splice(index,1);

    save();
    renderTasks();

}

renderTasks();