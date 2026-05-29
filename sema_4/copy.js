
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
            <h3>Ciudades:</h3>
            <div id="listas_ciudades">cargando ciudades...</div>
            `;
            const codigodelpais= pais.cca2;
            buscar_ciudad(codigodelpais);
        })
        .catch(()=>{
            console.log(Error);
            document.getElementById("resultados").innerHTML= "<p>❌ pais no encontrado</p>";
        });
}

function buscar_ciudad(pais) {
    const miUsuario="focangel";
    const url=`https://secure.geonames.org/searchJSON?country=${codigoDelPais}&featureClass=P&lang=es&maxRows=30&username=${miUsuario}`;
    fetch(url)
        .then(respuesta=>respuesta.json)
        .then(datos =>{
            const contenedor=document.getElementById("listas_ciudades");
            if(!datos.geonames || datos.geonames.length === 0){
                contenedor.innerHTML="<p>❌ no se encontraron ciudades </p>";
                return;
            }
            let listahtml="<ul>";
            datos.geonames.forEach(ciudades => {
                listahtml+=`<li>${ciudad.name}</li>`
            });
            listahtml += "<ul>";
            contenedor.innerHTML=listahtml;
        })
        .catch(Error=>{
            console.log(Error)
            document.getElementById("listas_ciudades").innerHTML="<p>Error al cargar las ciudades</p>"
        });
}