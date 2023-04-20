// Mostrar por pantalla todos los numeros del 1 al 10
// bucle for
console.log("---------------FOR----------------");
for (let i = 1; i < 11; i++) {
    console.log(i);; 
}
// buble while
console.log("---------------WHILE--------------");
let i = 1;
while (i < 11) {
    console.log(i);
    i++;
}


// Mostrar unicamente los numeros pares
// bucle for
console.log("---------------FOR----------------");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
// buble while
console.log("---------------WHILE--------------");
i = 2;
while (i <= 10) {
    console.log(i);
    i += 2;
}


// Mostrar los numeros impares divisibles por 3
// bucle for
console.log("---------------FOR----------------");
for (let i = 1; i <= 10; i += 2) {
    if (i % 3 == 0) {
        console.log(i); 
    }
}
// buble while
console.log("---------------WHILE--------------");
i = 0;
while (i <= 10) {
    if (i%3 == 0 && i%2 != 0) {
        console.log(i);
    }
    i++;
}