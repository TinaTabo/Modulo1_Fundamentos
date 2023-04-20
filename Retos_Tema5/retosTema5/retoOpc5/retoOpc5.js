// Importar libreria
let myLib = require("../reto3/libreriaVector");

function crearMatriz(n,m,k) {
    let matriz = [];
    for (let i = 0; i < n; i++) {
        matriz.push(myLib.crearVector(m,k));
    }
    return matriz;
}

function sumaMatriz(m1,m2) {
    if (m1.length == m2.length) {
        let matrizSuma = [];
        for (let i = 0; i < m1.length; i++) {
            if (m1[i].length == m2[i].length) {
                matrizSuma.push(myLib.sumaVector(m1[i],m2[i]));
            }else{
                return "Las matrices no tienen las mismas dimensiones."
            }
        }
        return matrizSuma;
    }else{
        return "Las matrices no tienen las mismas dimensiones."
    }
}

function productoNumeroMatriz(n,m) {
    let productoNumeroMatriz = [];
    for (let i = 0; i < m.length; i++) {
        productoNumeroMatriz.push(myLib.productoNumeroVector(n, m[i]));
    }
    return productoNumeroMatriz;
}

function restaMatriz(m1,m2) {
    if (m1.length == m2.length) {
        let matrizResta = [];
        for (let i = 0; i < m1.length; i++) {
            if (m1[i].length == m2[i].length) {
                matrizResta.push(myLib.restaVector(m1[i], m2[i]));
            }else{
                return "Las matrices no tienen las mismas dimensiones."
            }
        }
        return matrizResta;
    }else{
        return "Las matrices no tienen las mismas dimensiones."
    }
}

function productoMatriz(m1,m2) {
    if (m1.length == m2.length) {
        let matrizProducto = [];
        for (let i = 0; i < m1.length; i++) {
            if (m1[i].length == m2[i].length) {
                matrizProducto.push(myLib.productoVector(m1[i], m2[i]));
            }else{
                return "Las matrices no tienen las mismas dimensiones."
            }
        }
        return matrizProducto;
    }else{
        return "Las matrices no tienen las mismas dimensiones."
    }
}

// Exportar librería
module.exports = {crearMatriz, sumaMatriz, productoNumeroMatriz, restaMatriz, productoMatriz};
