// Calcular la suma de los cuadrados de los 100 primeros numeros
let sumaCuadrados = 0;
for (let i = 0; i < 100; i++) {
    sumaCuadrados += Math.pow(i,2);
}
console.log(`Resultado sumaCuadrados: ${sumaCuadrados}`);

// Calcular el producto de un array dado por 2
let array = [2, 10, 45, 33, 22, 14];
let arrayProducto = [];
for (const num of array) {
    arrayProducto.push(num*2);
}
console.log(`Producto arrayx2: [${arrayProducto}]`);