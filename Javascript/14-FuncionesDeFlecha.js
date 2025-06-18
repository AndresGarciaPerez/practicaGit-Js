
// --------------------- FUNCIONES DE FLECHA ------------------- //
// const funcion = () => {}

// Función tradicional
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// Función de flecha equivalente
const saludar = (nombre, apellido) => {
  return `Hola, ${nombre} ${apellido}`;
};



// Si la función tiene un solo parámetro, puedes quitar los paréntesis
const cuadrado = x => x * x;
console.log(cuadrado(4)); // 16


// Si el cuerpo tiene una sola línea, no necesitas return ni llaves {}
const saludar = nombre => `Hola, ${nombre}`;
console.log(saludar("Andres")); // "Hola, Andres"


//Si el cuerpo tiene varias líneas, usa llaves y return explícito
const saludar = nombre => {
  const saludo = `Hola, ${nombre}`;
  return saludo;
};



//EJEMPLO DE COMO RECORRER UN ARRAY USANDO FUNCION DE FLECHA

const nombres = ["Andres", "Laura", "Pedro"];

nombres.forEach(nombre => console.log(`Hola ${nombre}`));



// Closures (funciones que recuerdan su contexto)

// Hoisting y scope

// Eventos en el DOM (si piensas usar JavaScript para el navegador)

// Modularización (ES Modules): import, export

// **Manejo del DOM (document.getElementById, etc.)`

// Storage local (localStorage, sessionStorage)

// JSON.stringify / JSON.parse


