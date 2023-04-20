// Crear matriz
function crearMatriz(n,m,k) {
    let matriz = [];
    for (let i = 0; i < n; i++) {
        matriz.push([]);
        for (let j = 0; j < m; j++) {
            matriz[i].push(Math.floor(Math.random()*(k+1)));
        }
    }
    return matriz;
}

console.log('----------Matriz1----------');
let matriz1 = crearMatriz(10,10,50);
console.log(matriz1);
console.log('----------Matriz2----------');
let matriz2 = crearMatriz(10,10,50);
console.log(matriz2);

// Sumar dos matrices
function sumaMatriz(m1,m2) {
    if (m1.length == m2.length) {
        let matrizSuma = [];
        for (let i = 0; i < m1.length; i++) {
            matrizSuma.push([]);
            if (m1[i].length == m2[i].length) {
                for (let j = 0; j < m1[i].length; j++) {
                    matrizSuma[i].push(m1[i][j] + m2[i][j]);
                }
            }else{
                return "Las matrices no tienen las mismas dimensiones."
            }
        }
        return matrizSuma;
    }else{
        return "Las matrices no tienen las mismas dimensiones."
    }
}

console.log('----------Matriz-Resultado-Suma----------');
let resultadoSuma = sumaMatriz(matriz1,matriz2);
console.log(resultadoSuma);


// Multiplicacion de un numero dado por todos los elementos de la matriz.
function productoNumeroAleatorioMatriz(m) {
    let productoNumeroMatriz = [];
    for (let i = 0; i < m.length; i++) {
        productoNumeroMatriz.push([]);
        for (let j = 0; j < m[i].length; j++) {
            let numAleatorio = Math.floor(Math.random()*100);
            console.log(`La matriz se multiplicará por el numero: ${numAleatorio}`);
            productoNumeroMatriz[i].push(m[i][j] * numAleatorio);
        }
    }
    return productoNumeroMatriz;
}


console.log('----------Matriz-Resultado-Producto-Numero----------');
let resultadoProducto = productoNumeroAleatorioMatriz(matriz1);
console.log(resultadoProducto);