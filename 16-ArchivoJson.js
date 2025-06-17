
// Un objeto Json luce asi: 

// {
//   "nombre": "Andres",
//   "edad": 30,
//   "activo": true
// }


// Convertir de objeto JS → a texto JSON

const usuario = { nombre: "Andres", edad: 30 };
const jsonTexto = JSON.stringify(usuario);
console.log(jsonTexto); // '{"nombre":"Andres","edad":30}'



// Convertir de texto JSON → a objeto JS

const json = '{"nombre":"Andres","edad":30}';
const obj = JSON.parse(json);
console.log(obj.nombre); // Andres


// Convertir el JSON de una peticion a objeto js  

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(respuesta => respuesta.json())  // Convertimos de JSON a objeto
  .then(usuario => {
    console.log(usuario);
    console.log("Nombre:", usuario.name);
  })
  .catch(error => console.error("Error:", error));



