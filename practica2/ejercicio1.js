
const persona = {
  nombre: "Ivan Isay",
  edad: 37,
  direccion: {
    ciudad: " Qro ",
    pais: "MX",
  }
};
//  agrege los valores de los objetos y use el destructuración.
const { nombre, edad, direccion: {cuidad, pais} } = persona;
 
//en esta linea estoy tomando las variables de un objeto dentro de otro.

console.log(" me llamo " + nombre + " , tengo " + edad + " años y vivo " + cuidad + " ," + pais + " . "); 
// por lo ultimo en esta linea se muestra el mensaje final que muestra los datos obtenidos del objeto-