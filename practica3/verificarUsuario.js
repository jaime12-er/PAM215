
function verificarUsuario(usuario) {//lo que hice fue crear una funcion que verifique que si el usuario
  return new Promise((resolve, reject) => {//es admi utilizando una promesa. si lo es da acceso con resolve
    if (usuario === "admin") {// y si no lo rechaza con reject
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}

verificarUsuario("ivan")
  .then(mensaje => console.log(mensaje)) // en esta linea lo utilize con diferentes nombres   
  .catch(error => console.error(error));

verificarUsuario("admi")
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error)); 