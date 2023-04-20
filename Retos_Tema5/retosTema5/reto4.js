// Funcion para crear vectores de numeros aleatorios.
function crearVector(n,m) {
    let vector = [];
    for (let i = 0; i < n; i++) {
        vector.push(Math.floor(Math.random()*m));
    }
    return vector
}

function sumaVectorforEach(v1,v2) {
    let vectorSuma = []
    v1.forEach(
        function (value, index) {
            vectorSuma[index] = value + v2[index];
        }
    )
    return vectorSuma;
}

function sumaVectorMap(v1,v2) {
    let vectorSuma = v1.map(
        function (value, index) {
            return value + v2[index];
        }
    )
    return vectorSuma;
}

function filtrarPares(v) {
    let pares = v.filter(
        function (value, index) {
            if(value % 2 == 0){
                return value;
            }
        }
    )
    return pares;
}

function sumatorio(v) {
    let suma = v.reduce(
        function (accumulator, value, index) {
            return accumulator + value;
        }
    )
    return suma;
}


let vector1 = crearVector(4,10);
let vector2 = crearVector(4,10);
console.log(`vector1: [${vector1}], vector2: [${vector2}]`);

let sumaForEach = sumaVectorforEach(vector1,vector2);
console.log(`Suma forEach: [${sumaForEach}]`);

let sumaMap = sumaVectorMap(vector1,vector2);
console.log(`Suma Map: [${sumaMap}]`);

let pares = filtrarPares(vector1);
console.log(`Numeros pares en vector1: [${pares}]`);

let sumaVector = sumatorio(vector1);
console.log(`Suma de todos los numeros en vector1: ${sumaVector}`);