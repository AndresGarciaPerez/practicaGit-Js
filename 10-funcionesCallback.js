
// Estas funciones se usan para llamar una funcion dentro de otra funcion

function imprimir(mensaje) {
  console.log("El resultado es: " + mensaje);
}

function procesarEntradaUsuario(num1, num2, callback) {
  let resultadoSuma = num1 + num2;
  let nombre = "Andres";
  callback(resultadoSuma); // se llama la función pasada (saludar)
}

procesarEntradaUsuario(4,5, imprimir);
