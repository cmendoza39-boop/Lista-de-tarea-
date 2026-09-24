// Seleccionar elementos
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Agregar tarea
addButton.addEventListener("click", agregarTarea);

function agregarTarea() {
    const texto = input.value.trim();

    if (texto === "") {
        alert("Escribe una tarea.");
        return;
    }

    // Crear elemento de la lista
    const li = document.createElement("li");

    // Texto de la tarea
    const span = document.createElement("span");
    span.textContent = texto;

    // Marcar como completada
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Botón eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Agregar elementos al <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Agregar la tarea a la lista
    taskList.appendChild(li);

     // Eliminar del LocalStorage
        tareas = tareas.filter(t => t !== texto);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
    // Limpiar el input

 input.value = "";
 input.focus(); 

// Agregar tarea al presionar Enter
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregarTarea();
    }
})