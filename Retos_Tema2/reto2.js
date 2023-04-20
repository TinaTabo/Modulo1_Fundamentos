// Crear arrays de strings
let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = ["borja", "emilio", "cristina", "ana", "tomas"];
let arr3 = ["poveda", "carretero", "taboada", "rodriguez", "martinez"];

// Crear array de arrays
let matriz = [arr1, arr2, arr3];

// Mostrar matriz[2]
console.log(matriz[1]);

// Mostrar matriz[2,4]
console.log(matriz[1][3]);

// Mostrar segundo caracter de la matriz[2,4]
console.log(matriz[1][3][1]);

// Sustituir el elemento matriz[2] por otro array de numeros y mostrar ese elemento
let numArr = [10, 23, 25, 30, 50];
matriz.splice(2, numArr.length, numArr);
console.log(matriz[1]);

// Modificar el elemento matriz[1,3] por un booleano y mostrar elemento
matriz[0][2] = true;
console.log(matriz[0][2]);

// Insertar al final del primer array un nuevo string
matriz[0].push("¡Estoy al final!");
console.log(matriz);

// Eliminar el primer elemento del primer array
matriz[0].shift();
console.log(matriz);

// Eliminar el ultimo elemento de un array
matriz[1].pop();
console.log(matriz);

// Ordenar alfabeticamente el array 2
// Para ello se utiliza el método .sort()
matriz[1].sort();
console.log(matriz[1]);
