//-- Importar clase Vector
const classVector = require("./vector");

//-- Pruebas
let vector1 = new classVector.Vector(4,10);
console.log(vector1);

let vector2 = new classVector.Vector(4,20);
console.log(vector2);

let suma = vector1.add(vector2);
console.log(`Suma: [${suma}]`);

let productNum = vector1.productNum(2);
console.log(`ProductoNum: [${productNum}]`);

let resta = vector1.subs(vector2);
console.log(`Resta: [${resta}]`);

let producto = vector1.product(vector2);
console.log(`Producto: [${producto}]`);