const productos=[
{
    id:1,
    nombre:"laptop",
    precio: 250000
},
{
    id:2,
    nombre:"teclado",
    precio:15000
},
{
    id:2,
    nombre:"mouse",
    precio:19000
},
{
    nombre:"cama"
}
];
//este es el for..in me permite recorrer de forma descendente la lista const productos
for(let indice in productos){
    console.log(productos[indice])
}
//aqui vemos como agregar y eliminar a la lista set
const numeros= new Set([1,2,1,3,4,5,6,5,2,3,4]);
numeros.add(9);
numeros.delete(2);

//este for..of me permite recorrer la lista de set de forma descendente 
for(let numero of numeros){
    console.log(numero);
}
//aqui me muestra si los digitos estan en set o no(true,false)
console.log(numeros.has(9));
console.log(numeros.has(10));

//aqui podemos almacenar datos en pares con map 
const catalogo= new Map();
catalogo.set("electronica","laptop");
catalogo.set("accesorio","mouse");
catalogo.set("periferico","teclado");

//este forEach me muestra de forma descendente el map donde tiene almacenado los datos pares
catalogo.forEach((valor,clave)=>{
    console.log(`categoria: ${clave}-producto:${valor}`)
});

//este forEach me permite hacer valiaciones de los productos antes mecionados 
productos.forEach((productos)=>{
    if (productos.id && productos.nombre && productos.precio){
        console.log(`producto valido:${productos.nombre}`);
    }else{
        console.log(`producto invalido:${productos.nombre},faltan datos`);
    }
});

//para acceder a este codigo en la terminal debes poner node + nombre del archivo