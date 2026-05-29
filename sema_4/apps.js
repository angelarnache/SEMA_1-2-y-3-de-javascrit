
function buscar_pais() {
    const nombre= document.getElementById("inputpais").value;
    fetch(`https://restcountries.com/v3.1/translation/${nombre}`)
        .then(respuesta => respuesta.json())
        .then(datos =>{
            const pais= datos[0];

            document.getElementById("resultados").innerHTML =`
            <h2>${pais.translations.spa.common}</h2>
            <p> capital:${pais.capital?.[0]??"no tiene"}</p>
            <p> region: ${pais.region}</p>
            <img src ="${pais.flags.png}" alt="bandera" width="100">
            `;
        })
        .catch(()=>{
            console.log(Error);
            document.getElementById("resultados").innerHTML= "<p>❌ pais no encontrado</p>";
        });
}

function buscar_ciudad(pais) {
    fetch("https://countriesnow.space/api/v0.1/countries/cities", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ country: pais })
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
    console.log(datos);
    })
    .catch(error => console.log(error));
}