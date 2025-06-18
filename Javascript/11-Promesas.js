
// Tanto resolve como reject son funciones y bien podrian tener otros nombres

let promesa = new Promise(function (resolve, reject) {
  let exito = true;

  if (exito) {
    resolve("¡La operación fue exitosa!");
  } else {
    reject("Algo salió mal.");
  }
});


//mandamos a llamar a nuestra promesa,  la promesa me retorna dos valores, un positivo un negativo
promesa
  .then(function (mensaje) { // Esta es la primera funcion que espera nuestra promesa (resolve)
    console.log("Éxito:", mensaje);
  })
  .catch(function (error) {  // Esta es la segunda funcion que espera nuestra promesa (reject)
    console.log("Error:", error); 
  });




  // LO MISMO DE ARRIBA PERO CON FUNCION DE FLECHA

  let promesa2 = new Promise( (resolve, reject) =>  {

    let exito = true;

    if (exito) {
      resolve("¡La operación fue exitosa!");
    } 
    else {
      reject("Algo salió mal.");
    }
  });


// Tanto el then como catch vendrian siendo los parametros que espera la funcion de tipo promesa
promesa
  .then( (mensaje) => console.log("Éxito:", mensaje))  //valor positivo, lo capturamos en el .then
  .catch( (error) =>  console.log("Error:", error)); // valor negativo (error) lo capturamos en ell .catch
  




// EJEMPLO DE PROMESA CON SET TIMEOUT PARA SIMULAR UNA PETICION QUE TARDA

let promesaConRetraso = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Datos recibidos después de 2 segundos");
  }, 2000);
});

promesaConRetraso
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));




// LLAMAR A UN ENDPOINT USANDO PROMESAS

function obtenerUsuario() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      return response.json(); // convertimos la respuesta en JSON
    });
}

// Ejecutar la promesa
obtenerUsuario()
  .then(usuario => {
    console.log("Usuario recibido:", usuario);
  })
  .catch(error => {
    console.error("Error al obtener el usuario:", error.message);
  });


  // AHORA CON FUNCION ASICRONA QUE ES LO MAS COMUN, ESTE ES UN CASO REAL MUY USADO

  async function obtenerUsuario() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1"); // espera a que se resulva la peticion

    //Ahora sigue con el codigo
    if (!respuesta.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const usuario = await respuesta.json(); //Esperamos que los datos se conviertan a json
    console.log("Usuario recibido:", usuario);
  } 
  catch (error) {
    console.error("Error al obtener el usuario:", error.message);
  }
}

// Llamamos la función
obtenerUsuario();


//RECORDATORIO: usar await antes de fetch() y response() [que es la respuesta de la peticion puede tener otro nombre]