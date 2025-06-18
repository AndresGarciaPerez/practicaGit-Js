
// ------------------ SON PARECIDOS PERO NO SON LO MISMO!!! ------------------------- //



//--------- SPREAD: Sirve para expandir elementos -------------------

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

// Unir arrays
const todosLosNumeros = [...numeros1, ...numeros2];
console.log(todosLosNumeros); // [1, 2, 3, 4, 5, 6]


//TAMBIEN ME SIRVE PARA COPIAR UN ARRAY
const original = [1, 2, 3];
const copia = [...original];

copia.push(4);
console.log(original); // [1, 2, 3]
console.log(copia);    // [1, 2, 3, 4]


// TAMBIEN LO PUEDO USAR DE LA MISMA FORMA CON OBJETOS

const usuario = { nombre: "Andres", edad: 30 };
const datosExtra = { pais: "El Salvador" };

const usuarioCompleto = { ...usuario, ...datosExtra };

console.log(usuarioCompleto);
// { nombre: "Andres", edad: 30, pais: "El Salvador" }



// ------------------------ OPERADOR REST -------------------------- //

// Sirve para re agrupar elementos 

const [primero, ...resto] = [10, 20, 30, 40];

console.log(primero); // 10
console.log(resto);   // [20, 30, 40]


const persona = {
  nombre: "Andres",
  edad: 30,
  ciudad: "San Salvador"
};

const { nombre, ...otrosDatos } = persona;

console.log(nombre);      // "Andres"
console.log(otrosDatos);  // { edad: 30, ciudad: "San Salvador" }




// --------------------  PRACTICA USANDO ESTOS OPERADORES ---------------------- //

const respuesta = {
  usuarios: [
    { id: 1, nombre: "Andres", rol: "admin" },
    { id: 2, nombre: "Laura", rol: "editor" },
    { id: 3, nombre: "Pedro", rol: "viewer" }
  ],
  total: 3,
  estado: "ok"
};


//OBTENER EL PRIMER USUARIO
const [primerUsuario] = respuesta.usuarios;
console.log(primerUsuario.nombre); // "Andres"



//OBTENER LOS DEMAS USUARIO EXCEPTO EL PRIMERO
const [, ...restoUsuarios] = respuesta.usuarios;
console.log(restoUsuarios);
/*
[
  { id: 2, nombre: "Laura", rol: "editor" },
  { id: 3, nombre: "Pedro", rol: "viewer" }
]
*/


//EXTRAER PROPIEDADES DEL OBJETO PRINCIPAL

const { usuarios, total } = respuesta;

console.log(`Hay ${total} usuarios`); // hay 3 usuario
console.log(usuarios[1].nombre); // "Laura"



// USAR COMO PARAMETRO DE UNA FUNCION

function imprimirUsuario({ nombre, rol }) {
  console.log(`${nombre} tiene el rol de ${rol}`);
}

imprimirUsuario(respuesta.usuarios[2]); // "Pedro tiene el rol de viewer"




