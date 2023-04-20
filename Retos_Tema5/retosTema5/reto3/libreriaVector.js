function crearVector(n,m) {
    let vector = [];
    for (let i = 0; i < n; i++) {
        vector.push(Math.floor(Math.random()*(m+1)));
    }
    return vector
}

function sumaVector(v1,v2) {
    if (v1.length == v2.length) {
        let vectorSuma = [];
        for (let i = 0; i < v1.length; i++) {
            vectorSuma[i] = v1[i] + v2[i];
        }
        return vectorSuma;
    }else{
        return "Los vectores no tienen la misma longitud."
    }
}

function productoNumeroVector(n,v) {
    let productoNumeroVector = [];
    for (let i = 0; i < v.length; i++) {
        productoNumeroVector[i] = v[i] * n;
    }
    return productoNumeroVector;
}

function restaVector(v1,v2) {
    if (v1.length == v2.length) {
        let vectorResta = [];
        for (let i = 0; i < v1.length; i++) {
            vectorResta[i] = v1[i] - v2[i];
        }
        return vectorResta;
    }else{
        return "Los vectores no tienen la misma longitud."
    }
}

function productoVector(v1,v2) {
    if (v1.length == v2.length) {
        let vectorProducto = [];
        for (let i = 0; i < v1.length; i++) {
            vectorProducto[i] = v1[i] * v2[i];
        }
        return vectorProducto;
    }else{
        return "Los vectores no tienen la misma longitud."
    }
}

// Exportar libreria.
module.exports = {crearVector, sumaVector, productoNumeroVector, restaVector, productoVector};