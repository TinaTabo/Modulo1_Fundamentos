class Vector{
    //-- Constructor
    constructor(n,m){
        this.vector = [];
        for (let i = 0; i < n; i++) {
            this.vector.push(Math.floor(Math.random()*(m+1)));
        }
    }

    //-- Metodos
    add(a){
        if (a.vector.length == this.vector.length) {
            let vectorSuma = [];
            for (let i = 0; i < a.vector.length; i++) {
                vectorSuma[i] = a.vector[i] + this.vector[i];
            }
            return vectorSuma;
        }else{
            return "Los vectores no tienen la misma longitud."
        }
    }

    productNum(n){
        let productoNumeroVector = [];
        for (let i = 0; i < this.vector.length; i++) {
            productoNumeroVector[i] = this.vector[i] * n;
        }
        return productoNumeroVector;
    }

    subs(a){
        if (a.vector.length == this.vector.length) {
            let vectorResta = [];
            for (let i = 0; i < a.vector.length; i++) {
                vectorResta[i] = this.vector[i] - a.vector[i];
            }
            return vectorResta;
        }else{
            return "Los vectores no tienen la misma longitud."
        }
    }

    product(a){
        if (a.vector.length == this.vector.length) {
            let vectorProducto = [];
            for (let i = 0; i < a.vector.length; i++) {
                vectorProducto[i] = this.vector[i] * a.vector[i];
            }
            return vectorProducto;
        }else{
            return "Los vectores no tienen la misma longitud."
        }
    }
}

//-- Exportar clase
module.exports = {Vector};
