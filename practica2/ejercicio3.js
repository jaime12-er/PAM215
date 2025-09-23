
const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

//en esta linea busca a luis con .find() y lo que hace es recorrer la lista.

const encontrado = personas.find(p => p.nombre === "Luis");
console.log("persona encontrada:", encontrado);

//con .forEach() lo que hace es que recorre cada elementop del arreglo
// va  mostrando su nombre junto con la edad
personas.forEach(p => {
  console.log(p.nombre + " tiene " + p.edad + " años");
});

// con .reduce() voy sumando todas las edades y empieza en 0 y le va sumando la edad de cada persona
const totalEdades = personas.reduce((suma, p) => suma + p.edad, 0);
console.log("suma de edades:", totalEdades);
