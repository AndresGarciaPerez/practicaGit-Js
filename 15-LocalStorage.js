
// ---------------------- LOCAL STORAGE ----------------------- //

// Los datos persisten incluso si cierras el navegador o apagas la compu


// Guardar datos
localStorage.setItem("nombre", "Andres");

// Obtener datos
const nombre = localStorage.getItem("nombre");
console.log(nombre); // "Andres"

// Eliminar un dato
localStorage.removeItem("nombre");

// Limpiar todo
localStorage.clear();





// ------------------------ SESSION STORAGE ------------------------- //

// Guarda datos solo durante la sesión del navegador, si cierras la pestaña o navegador, se pierden los datos

// funciona igual que el local storage

sessionStorage.setItem("tema", "oscuro");
console.log(sessionStorage.getItem("tema")); // "oscuro"
sessionStorage.removeItem("tema");




// SOLO SE PUEDE GUARDAR STRING, SI QUIERO GUARDAR UN OBJETO O ARRAY DEBO USAR 
// JSON.stringify  y JSON.parse

const usuario = { nombre: "Andres", edad: 30 };

// JSON.stringify Guardar como string
localStorage.setItem("usuario", JSON.stringify(usuario));

// JSON.parse Recuperar y convertir de nuevo a objeto
const datos = JSON.parse(localStorage.getItem("usuario"));
console.log(datos.nombre); // "Andres"

