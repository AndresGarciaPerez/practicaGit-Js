
// ----------------- DESESTRUCTURACION EN OBJETOS  ------------------- //

const persona = {
  nombre: "Andres",
  edad: 30,
  profesion: "Desarrollador"
};

// Forma clásica
// const nombre = persona.nombre;


// ✅ Con destructuring:
const { nombre, edad } = persona;

console.log(nombre); // Andres
console.log(edad);   // 30

//PUEDO RENOMBRAR VARIABLES
const { profesion: trabajo } = persona;
console.log(trabajo); // Desarrollador


// -------------------- DESESTRUCTURACION EN ARRAY ------------------- //

const numeros = [10, 20, 30];

// Forma clásica
// const primero = numeros[0];

// ✅ Con destructuring:
const [primero, segundo] = numeros;

console.log(primero); // 10
console.log(segundo); // 20


// --------------- DESESTRUCTURACION EN FUNCION ------------------ //

// vamos a pasar un objeto como parametro a una funcion

function mostrarUsuario({ nombre, edad, profesion }) {
  console.log(`${nombre} tiene ${edad} años y su profesion es: ${profesion}`);
}

mostrarUsuario(persona); 



// -------------- DESESTRUCTURACION CON OPERADOR REST(...) --------------- //

const usuario = {
  nombres: "Angel Andres",
  edad: 30,
  pais: "El Salvador"
};

const { nombres, ...resto } = usuario;

console.log(nombre); // Andres
console.log(resto);  // { edad: 30, pais: "El Salvador" }
