

let frutas = ["Manzana", "Banana", "Mango"];
let numeros = [10, 20, 30];
let lenguajes = ["JavaScript", "Python", "Java", "C++"];


// Como acceder a un valor de array

console.log(frutas[0]); // "Manzana"
console.log(frutas[2]); // "Mango"


// Como modificar el valor de un elemento del array
frutas[1] = "Piña"; 


//Como recorrer un array 
frutas.forEach((fruta) => console.log(fruta));


//Agregar un valor al final 
numeros.push(40);     // [10, 20, 30, 40]


//Quitar un valor al final
numeros.pop();        // [10, 20, 30]


//Agregar un valor al inicio 
numeros.unshift(5);   // [5, 10, 20, 30]


//Quitar un valor al inicio
numeros.shift();      // [10, 20, 30]


//Me devuelve la longitud del arreglo
console.log(lenguajes.length); // 4


// Devuelve la posicion del elemeto
console.log(lenguajes.indexOf("Java")); // 2


//Si devulve -1 es por que no existe el valor en el array ( muy util esto )
console.log(lenguajes.indexOf("Ruby")); // -1 (no existe)


// Buscar un valor dentro de un array, retorno un boolean
console.log(lenguajes.includes("Python")); // true
console.log(lenguajes.includes("PHP"));    // false

// Me retorna el arrar separado cada elemento por el caracter que le indique
console.log(lenguajes.join(", ")); // "JavaScript, Python, Java, C++"
console.log(lenguajes.join(" | ")); // "JavaScript | Python | Java | C++"





// El siguiente metodo me devulve un nuevo array a partir del original sin modificarlo
let numbers = [10, 20, 30, 40, 50];

let subArray = numbers.slice(1, 4); // desde índice 1 hasta antes del 4
console.log(subArray); // [20, 30, 40]



//El siguiente crea un nuevo array modificado con el resultado de aplicar una función a cada elemento.
let edades = [20, 25, 30];

let dobles = edades.map(e => e * 2);
console.log(dobles); // [40, 50, 60]



//este metodo filter(), crea un nuevo array con elementos que cumplen cierta condición.
let numeros2 = [10, 25, 8, 40];

let mayoresA20 = numeros2.filter(n => n > 20);
console.log(mayoresA20); // [25, 40]



//Es parecido a filter pero este metodo solo devulve el primer elmentos que cumple la condicion, find()
let numeros3 = [5, 12, 8, 130, 44];

let encontrado = numeros3.find(n => n > 10);
console.log(encontrado); // 12




// .sort()  me ordena un array alfabeticamente

let nombres = ["Carlos", "Ana", "Luis"];
nombres.sort();
console.log(nombres); // ["Ana", "Carlos", "Luis"]

let numeros4 = [10, 5, 8, 1];
numeros.sort(); // ¡Cuidado! esto los ordena como strings
console.log(numeros); // [1, 10, 5, 8]

//Para ordenar numero es asi:
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 5, 8, 10]




//el siguiente metodo invierte el orden de los valores de array
let letras = ["a", "b", "c"];
letras.reverse();
console.log(letras); // ["c", "b", "a"]
