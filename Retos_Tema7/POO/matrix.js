//--Importar clase Vector
const classVector = require("./vector");

class Matrix{
    //-- Constructor
    constructor(n,m,k){
        this.matriz = []
        for (let i = 0; i < n; i++) {
            let vector = new classVector.Vector(m,k);
            this.matriz.push(vector);
        }
        console.log(this.matriz);
    }

    //-- Metodos
    add(m){
        if (m.matriz.length == this.matriz.length) {
            let matrizSuma = [];
            for (let i = 0; i < m.matriz.length; i++) {
                if (m.matriz[i].length == this.matriz[i].length) {
                    matrizSuma.push(m.matriz[i].add(this.matriz[i]));
                }else{
                    return "Las matrices no tienen las mismas dimensiones."
                }
            }
            return matrizSuma;
        }else{
            return "Las matrices no tienen las mismas dimensiones."
        }
    }

    productNum(n){
        let productoNumeroMatriz = [];
        for (let i = 0; i < this.matriz.length; i++) {
            productoNumeroMatriz.push(this.matriz[i].productNum(n));
        }
        return productoNumeroMatriz;
    }

    subs(m){
        if (m.matriz.length == this.matriz.length) {
            let matrizResta = [];
            for (let i = 0; i < m.matriz.length; i++) {
                if (m.matriz[i].length == this.matriz[i].length) {
                    matrizResta.push(this.matriz[i].subs(m.matriz[i]));
                }else{
                    return "Las matrices no tienen las mismas dimensiones."
                }
            }
            return matrizResta;
        }else{
            return "Las matrices no tienen las mismas dimensiones."
        }
    }

    product(m){
        if (m.matriz.length == this.matriz.length) {
            let matrizProducto = [];
            for (let i = 0; i < m.matriz.length; i++) {
                if (m.matriz[i].length == this.matriz[i].length) {
                    matrizProducto.push(this.matriz[i].product(m.matriz[i]));
                }else{
                    return "Las matrices no tienen las mismas dimensiones."
                }
            }
            return matrizProducto;
        }else{
            return "Las matrices no tienen las mismas dimensiones."
        }
    }
}

//-- Exportar clase Matrix
module.exports = {Matrix};
