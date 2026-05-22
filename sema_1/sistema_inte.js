function verificar(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    if(/\d/.test(nombre)){
        alert("el nombre no puede tener numeros");
    } else if (!/^\d+$/.test(edad)){
        alert("la edad solo puede tener numeros");
    }else{
        edad=parseInt(edad);
        if (edad <18){
        document.getElementById("resultado").textContent= "hola "+nombre+", eres menor de edad"; 
        } else if(edad === 18){
        document.getElementById("resultado").textContent="hola "+nombre+", tienes la edad necesaria";
        }else{
        document.getElementById("resultado").textContent="hola "+nombre+", eres mayor de edad ";
        }
    }
};

