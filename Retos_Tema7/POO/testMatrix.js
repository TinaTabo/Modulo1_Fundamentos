//--Importar clase Matriz
const classMatrix = require("./matrix");

//-- Pruebas
let matriz1 = new classMatrix.Matrix(3,3,10);
let matriz2 = new classMatrix.Matrix(3,3,10);

let suma = matriz1.add(matriz2);
console.log("Suma: ");
console.log(suma);

let productNum = matriz1.productNum(2);
console.log("ProductoNum:");
console.log(productNum);

let resta = matriz1.subs(matriz2);
console.log("Resta:");
console.log(resta);

let producto = matriz1.product(matriz2);
console.log("Producto:");
console.log(producto);