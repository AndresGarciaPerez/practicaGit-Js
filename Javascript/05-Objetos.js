// OBJETOS

let persona = {
  nombre: "Andres",
  edad: 30,
  profesion: "Desarrollador"
};

// Como acceder a un propiedad del objeti
console.log(persona.nombre); // Andres
console.log(persona["edad"]); // 30


// Como modificar una propiedad
persona.edad = 31;
persona["profesion"] = "Ingeniero";


//Agregar una nueva propidad al objeto
persona.pais = "El Salvador";

//Eliminar una propidad del objeto
delete persona.pais;


// Objeto con funciones ( metodos ) dentro 
let perro = {
  nombre: "Firulais",
  ladrar: function () {
    console.log("¡Guau!");
  }
};

perro.ladrar(); // ¡Guau!


//Recorrer un objeto

// ----- CON FOR ----- //

for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}



// ------------------- MEOTODOS --------------------- //

// Object.keys(objeto)  convierte las llaves del objeto a un array
const persona = {
  nombre: "Andres",
  edad: 30,
  profesion: "Desarrollador"
};
console.log(Object.keys(persona)); // ["nombre", "edad", "profesion"]



// Object.values(objeto)  Convierte los valores de cada elemento del objeto a Array

console.log(Object.values(persona));// ["Andres", 30, "Desarrollador"]



// Object.entries(objeto)  Devuelve un array de pares ( clave, valor) del objeto

console.log(Object.entries(persona));// [["nombre", "Andres"], ["edad", 30], ["profesion", "Desarrollador"]]
