// Funcion calculadora.
function calculadora(operacion, op1, op2=0) {
    switch (operacion) {
        case "sum":
            return op1 + op2;
            break;
        case "subs":
            return op1 - op2;
            break;
        case "mult":
            return op1 * op2;
            break;
        case "div":
            return op1 / op2;
            break;
        default:
            return "Operación no disponible"
            break;
    }
}

// Probar todas las operaciones disponibles
console.log(`-------------------------------------------------------`);
let resultado;
// Suma
resultado = calculadora("sum", 5, 4);
console.log(`Resultado de la suma: ${resultado}`);
// Resta
resultado = calculadora("subs", 5, 4);
console.log(`Resultado de la resta: ${resultado}`);
// Multiplicación
resultado = calculadora("mult", 5, 4);
console.log(`Resultado de la multiplicación: ${resultado}`);
// División
resultado = calculadora("div", 5, 4);
console.log(`Resultado de la división: ${resultado}`);
// Operacion erronea
resultado = calculadora("fact", 5, 4);
console.log(`Resultado: ${resultado}`);

// op2 = 0 por defecto
// Suma
resultado = calculadora("sum", 5);
console.log(`Resultado de la suma con op2 por defecto: ${resultado}`);

// Función arrow
let calculadoraArrow = (operacion, op1, op2) => {
    switch (operacion) {
        case "sum":
            return op1 + op2;
            break;
        case "subs":
            return op1 - op2;
            break;
        case "mult":
            return op1 * op2;
            break;
        case "div":
            return op1 / op2;
            break;
        default:
            return "Operación no disponible"
            break;
    }
}

console.log(`-------------------------------------------------------`);
console.log(`Suma Arrow: ${calculadoraArrow("sum", 2, 3)}`);
console.log(`Resta Arrow: ${calculadoraArrow("subs", 2, 3)}`);
console.log(`Multiplicación Arrow: ${calculadoraArrow("mult", 2, 3)}`);
console.log(`División Arrow: ${calculadoraArrow("div", 2, 3)}`);
console.log(`Operacion erronea Arrow: ${calculadoraArrow("fact", 2, 3)}`);

// Utilizar la funcion calculadora usando spread operator para los parametros
let sumar = ["sum", 4, 3];
let restar = ["subs", 4, 3];
let multiplicar = ["mult", 4, 3];
let dividir = ["div", 4, 3];
console.log(`-------------------------------------------------------`);
console.log(`Suma spreadOperator: ${calculadoraArrow(...sumar)}`);
console.log(`Resta spreadOperator: ${calculadoraArrow(...restar)}`);
console.log(`Multiplicación spreadOperator: ${calculadoraArrow(...multiplicar)}`);
console.log(`División spreadOperator: ${calculadoraArrow(...dividir)}`);