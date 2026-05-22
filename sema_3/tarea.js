window.onload = function () {
    mostrarLista("lista_de_tareas", "tareas");
    mostrarLista("tareas_completadas", "completadas");
};

function mostrarLista(idLista, clave) {
    const lista = document.getElementById(idLista);
    const items = JSON.parse(localStorage.getItem(clave) || "[]");
    lista.innerHTML = "";
    items.forEach(function (tarea, indice) {
    const li = document.createElement("li");
    li.textContent = tarea;

    if (clave === "tareas") {
        const btnCompletar = document.createElement("button");
        btnCompletar.textContent = "Completada";
        btnCompletar.onclick = function () {
        completar_tareas(indice);
        };
        li.appendChild(btnCompletar);
    }

    if (clave === "completadas"){
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "eliminar";
        btnEliminar.onclick = function (){
            lista.removeChild(li);
            const completadas = JSON.parse(localStorage.getItem("completadas") || "[]");
            completadas.splice(indice,1);
            localStorage.setItem("completadas", JSON.stringify(completadas));
            console.log("se a eliminado este elemento "+tarea)
        };
        li.appendChild(btnEliminar);
    }

    lista.appendChild(li);
    });
}

function completar_tareas(indice) {
    const tareas = JSON.parse(localStorage.getItem("tareas") || "[]");
    const completadas = JSON.parse(localStorage.getItem("completadas") || "[]");
    const tarea = tareas.splice(indice, 1)[0];
    completadas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    localStorage.setItem("completadas", JSON.stringify(completadas));
    mostrarLista("lista_de_tareas", "tareas");
    mostrarLista("tareas_completadas", "completadas");
}

function Guardar() {
    const input = document.getElementById("input_tarea");
    const texto = input.value;
    const tareas = JSON.parse(localStorage.getItem("tareas") || "[]");
    tareas.push(texto);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    input.value = "";
    mostrarLista("lista_de_tareas", "tareas");
    alert("Tarea guardada: " + texto);
}