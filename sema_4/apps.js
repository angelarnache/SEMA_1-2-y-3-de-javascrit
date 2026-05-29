function buscar_pais() {
    const nombre = document.getElementById("inputpais").value;
    const miUsuario = "focangel"; 
    const urlPais = `https://secure.geonames.org/searchJSON?q=${nombre}&featureCode=PCLI&lang=es&maxRows=1&username=${miUsuario}`;
    fetch(urlPais)
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (!datos.geonames || datos.geonames.length === 0) {
                throw new Error("País no encontrado");
            }
            const pais = datos.geonames[0];
            document.getElementById("resultados").innerHTML = `
                <h2>${pais.name}</h2>
                <p><strong>Continente/Región:</strong> ${pais.continentCode}</p>
                <img src="https://flagcdn.com/w160/${pais.countryCode.toLowerCase()}.png" alt="bandera" width="100">
                <hr>
                <h3>Ciudades:</h3>
                <div id="listas_ciudades">Cargando ciudades...</div>
            `;
            buscar_ciudad(pais.countryCode); 
        })
        .catch((error) => {
            console.log(error);
            document.getElementById("resultados").innerHTML = "<p>❌ País no encontrado</p>";
        });
}

function buscar_ciudad(codigoDelPais) {
    const miUsuario = "focangel";
    const urlCiudades = `https://secure.geonames.org/searchJSON?country=${codigoDelPais}&featureClass=P&lang=es&maxRows=30&username=${miUsuario}`;
    
    fetch(urlCiudades)
        .then(respuesta => respuesta.json()) 
        .then(datos => {
            const contenedor = document.getElementById("listas_ciudades");
            
            if (!datos.geonames || datos.geonames.length === 0) {
                contenedor.innerHTML = "<p>❌ No se encontraron ciudades</p>";
                return;
            }
            
            let listahtml = "<ul>";
            datos.geonames.forEach(ciudad => {
                listahtml += `<li>${ciudad.name}</li>`;
            });
            listahtml += "</ul>";
            
            contenedor.innerHTML = listahtml;
        })
        .catch(error => {
            console.log(error);
            document.getElementById("listas_ciudades").innerHTML = "<p>Error al cargar las ciudades</p>";
        });
}