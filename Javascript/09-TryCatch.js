
try {
  // Código que puede lanzar un error
} catch (error) {
  // Código que se ejecuta si ocurre un error
} finally {
  // (Opcional) Código que siempre se ejecuta, ocurra o no un error
}


try {
  let numero = 5;
  let resultado = numero + variableInexistente; // esta variable no existe
} catch (error) {
  console.log("Error atrapado:", error.message);
} finally {
  console.log("Esto siempre se ejecuta");
}
