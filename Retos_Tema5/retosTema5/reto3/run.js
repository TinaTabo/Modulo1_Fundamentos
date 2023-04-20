// Importar libreria
let myLib = require("./libreriaVector");

// Crear vectores de prueba
let vector1 = myLib.crearVector(4,10);
let vector2 = myLib.crearVector(4,20);
let vector3 = myLib.crearVector(7,5);
console.log(`Vector 1: [${vector1}], Vector 2: [${vector2}], Vector 3: [${vector3}]`);

// Sumar vectores
let suma1 = myLib.sumaVector(vector1,vector2);
console.log(`Suma vector1 y vector2: [${suma1}]`);
let suma2 = myLib.sumaVector(vector1,vector3);
console.log(`Suma vector1 y vector3: ${suma2}`);

// Producto numero vector
let prodNumVector = myLib.productoNumeroVector(2,vector1);
console.log(`Producto vector 1 y n=2: [${prodNumVector}]`);

// Resta vectores
let resta = myLib.restaVector(vector1,vector2);
console.log(`Resta vector1 y vector2: [${resta}]`);

// Producto vectores
let producto = myLib.productoVector(vector1,vector2);
console.log(`Producto vector1 y vector2: [${producto}]`);