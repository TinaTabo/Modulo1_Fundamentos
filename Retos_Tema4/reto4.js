// calcular el factorial
// bucle for
console.log("--------------FOR--------------");
let num = 4;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);

// bucle while
console.log("-------------WHILE-------------");
let i = 1;
num = 5;
factorial = 1;
while (i <= num) {
    factorial *= i;
    i++;
}
console.log(factorial);


// Buscar en un array de numeros aquellos que son multiplos de 2.
console.log("-------------------------------");
let numArr = [22, 58, 634, 81623, 2, 98];
i = 0;
while (i < numArr.length) {
    if (numArr[i] % 2 == 0) {
        console.log(`El numero: ${numArr[i]} es multiplo de 2.`);
    }
    i++;
}


// Realizar la suma de los 100 primeros numeros.
console.log("-------------------------------");
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);


// Buscar en un array de nombres el índice correspondiente a la primera ocurrencia del nombre "Pepe".
console.log("-------------------------------");
let nombres = ["Lola", "Pepe", "Juana", "Tomás", "Pepe", "Juan"];
i = 0;
while (i < nombres.length && nombres[i] != "Pepe") {
    i++;
}
console.log(`El primer "Pepe" se encuentra en la posicion: ${i}`);


// Generar dos array con 100 numeros aleatorios entre 0 y 20
let arrNum1 = [];
let arrNum2 = [];
for (let i = 0; i < 100; i++) {
    arrNum1.push(Math.floor(Math.random()*21));
    arrNum2.push(Math.floor(Math.random()*21));
}
console.log(arrNum1);
console.log(arrNum2);


// Realizar la suma de los dos arrays anteriores
let sumaArr = 0;
for (let i = 0; i < arrNum1.length; i++) {
    sumaArr += (arrNum1[i] + arrNum2[i]);
}
console.log(sumaArr);