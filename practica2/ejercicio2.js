
const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

// con filter se genera una lista nueva solo con los productos cuyo precio es mayor a 1000
const pro = productos.filter(pro => pro.precio > 1000);
console.log(pro);
// en esta linea utilize map para sacar una nuevo arreglo y con nadamas se queda con los nombres de cada 
//producto
const produ = productos.map(pro => pro.nombre);
console.log(produ);


