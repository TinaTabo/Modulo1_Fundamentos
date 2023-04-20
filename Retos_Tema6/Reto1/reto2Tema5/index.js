// Funcion sumar
function suma(op1, op2, op3) {
    return op1 + op2 + op3;
}

// Funcion restar
function resta(op1, op2) {
    return op1 - op2;
}

// Funcion producto
function producto(op1, op2) {
    return op1 * op2;
}

// Funcion division
function division(op1, op2) {
    return op1 / op2;
}

// Función cuadrado de un número
function cuadrado(op) {
    return Math.pow(op,2);
}

// Permitir exportar funciones
module.exports = {suma, resta, producto, division, cuadrado};