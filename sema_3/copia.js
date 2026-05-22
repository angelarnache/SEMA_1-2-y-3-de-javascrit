function mostrar_tareas() {
    const lista= document.getElementById("lista_de_tareas");
    const tareas = JSON.parse(localStorage.getItem("tareas") || "[]");
    lista.innerHTML="";

    tareas.forEach(function (tarea,indice){
        const li= document.createElement("li");
        li.textContent= tarea;
        const btnCompletar=document.createElement("button")
        btnCompletar.textContent="completada";

        btnCompletar.onclick = function (){
            completar_tareas(indice);
        };
        li.appendChild(btnCompletar);
        lista.appendChild(li);
    });
}
function completar_tareas(indice) {
    const tareas = JSON.parse(localStorage.getItem("tareas") || "[]");
    const completadas = JSON.parse(localStorage.getItem("completadas") || "[]");

    const tarea = tareas.splice(indice,1)[0];
    completadas.push(tarea);

    localStorage.setItem("tareas",JSON.stringify(tareas));
    localStorage.setItem("completadas",JSON.stringify(completadas));
    mostrar_tareas();
    mostrar_completadas();
}

function mostrar_completadas(){
    const lista=document.getElementById("tareas_completadas");
    const completadas = JSON.parse(localStorage.getItem("completadas") || "[]");
    lista.innerHTML="";

    completadas.forEach(function (tarea){
        const li= document.createElement("li");
        li.textContent= tarea;
        lista.appendChild(li);
    });
}

function Guardar() {
    const input = document.getElementById("input_tarea");
    const texto =input.value;

    const tareas = JSON.parse(localStorage.getItem("tareas") || "[]");
    tareas.push(texto);
    localStorage.setItem("tareas",JSON.stringify(tareas));

    input.value = "";
    mostrar_tareas();
    alert ("tarea guardada "+texto);
}