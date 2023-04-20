// Importar libreria
let myLib = require("./retoOpc5");


let n = 3;
let m = 4;
let k = 10;
console.log("---------------Crear-Matrices-------------------");
let matriz1 = myLib.crearMatriz(n,m,k);
console.log(matriz1);

let matriz2 = myLib.crearMatriz(n,m,k);
console.log(matriz2);

let matriz3 = myLib.crearMatriz(n,2,k);
console.log(matriz3);

console.log("--------------Suma-Matrices------------------");
let suma = myLib.sumaMatriz(matriz1, matriz2);
console.log(suma);

let suma2 = myLib.sumaMatriz(matriz1, matriz3);
console.log(suma2);


console.log("------------Producto-Numero-Matriz-------------");
let productoNumMatriz = myLib.productoNumeroMatriz(2, matriz1);
console.log(productoNumMatriz);


console.log("--------------Resta-Matrices------------------");
let resta = myLib.restaMatriz(matriz1, matriz2);
console.log(resta);

let resta2 = myLib.restaMatriz(matriz1, matriz3);
console.log(resta2);

console.log("--------------Producto-Matrices------------------");
let producto = myLib.productoMatriz(matriz1, matriz2);
console.log(producto);

let producto2 = myLib.productoMatriz(matriz1, matriz3);
console.log(producto2);