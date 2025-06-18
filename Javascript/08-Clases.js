
//Clase en javascript 

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}


//Crear instacias de clase

const persona1 = new Persona("Andres", 30);
persona1.saludar(); // Hola, mi nombre es Andres y tengo 30 años.

const persona2 = new Persona("Laura", 25);
persona2.saludar(); // Hola, mi nombre es Laura y tengo 25 años.

