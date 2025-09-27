
function simularpeticionAPI() { // lo que hice fue un funcion que devolviera la promesa 
    return new Promise(resolve => {// y simula resivir datos cada 5 y la funcion obtenerdatos espera a que 
        setTimeout(() => {// llegue la información y luego la imprime en consola
            resolve("datos recibidos correctamente");
        }, 5000);
    });
}


async function obtenerDatos() {
    console.log("espere los resultados");
    const resultado = await simularpeticionAPI();
    console.log(resultado);
}


obtenerDatos();