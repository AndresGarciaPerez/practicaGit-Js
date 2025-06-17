
//------------------- CICLO FOR --------------------//

for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}


//RECORRER UN ARRAY CON CICLO FOR

let frutas = ["Manzana", "Banana", "Mango"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}



// ----------------- FOREACH ------------------- //
let frutass = ["Manzana", "Banana", "Mango"];

frutass.forEach(function(fruta) {
  console.log("Fruta:", fruta);
});

// Version function arrow 
frutas.forEach((fruta) => console.log( fruta.toUpperCase() ));




//----------------- CICLO WHILE -------------------//

let i = 1;

while (i <= 5) {
  console.log("Número:", i);
  i++; // importante incrementar para evitar bucle infinito
}


// -------------------- CICLO  DO WHILE ---------------

let password;

do {
  password = "1234"; // aquí podrías usar prompt() si estás en navegador
  console.log("Validando...");
} while (password !== "1234");

console.log("Contraseña correcta");
