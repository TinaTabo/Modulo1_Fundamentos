// Importar paquete colors
const colores = require("colors");

//--------RETO-1-----------
console.log("-------------RETO-1--------------".red);
// Variable tipo string
let cadena = "Esto es una cadena de texto";

// Variable tipo number
let numero = 25;

// Variable tipo boolean
let verdadero = true;

// Mostrar por consola los valores de las variables
console.log(cadena.blue);
console.log(colores.green(numero));
console.log(colores.yellow(verdadero));


//--------RETO-2-----------
console.log("-------------RETO-2--------------".red);
//  Calcular la raíz cuadrada de 1369
let num = 1369;
let raizCuadrada = Math.sqrt(num);

// Mostrar resultado por consola
console.log(colores.yellow(raizCuadrada));

//--------RETO-3-----------
console.log("-------------RETO-3--------------".red);
// Generar un número aleatorio entre 0 y 10
let random = Math.random()*10

// Mostrar resultado por consola
console.log(colores.blue(random));


//--------RETO-4-----------
console.log("-------------RETO-4--------------".red);
// Variables que almacenan datos tipo string
let nombre = "Harry";
let apellido = "Potter";

// Cadena concatenada.
let texto = "Le informamos al señor " + nombre + " " + apellido + " que ha sido aceptado en el colegio Hogwarts de Magia y Hechicería."

// Cadena utilizando template strings.
let template = `Por la restricción de la magia en menores, ${nombre} ${apellido} queda expuldado del colegio Hogwarts de Magia y Hechicería.`

// Mostrar por consola todo en mayuscula.
console.log(texto.toUpperCase().green);
console.log(template.toUpperCase().cyan);



//--------RETO-5-----------
console.log("-------------RETO-5--------------".red);
// Variable tipo string
let text = "Este es el último reto del Tema 1!!";
console.log(text.blue);

// Variable para almacenar la longitud del texto
let long = text.length;
console.log(colores.yellow(long));

// Mostrar tercer caracter de la cadena
console.log(text[2].magenta);

// Mostrar por pantalla si la cadena contiene la palabra "codenotch"
console.log(colores.cyan(text.includes("codenotch")));