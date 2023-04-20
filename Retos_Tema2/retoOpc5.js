// Crear variable tipo set
let miSet = new Set();

miSet.add(1);
miSet.add("1");
miSet.add("Saludo");
miSet.add([1,2,3,4]);
miSet.add(1);

// Mostrar el constenido de miSet por consola.
console.log(miSet);

// Mostrar por consola el tamaño del set.
console.log(miSet.size);

// Mostrar por consola si existe el valor 2 en el set.
console.log(miSet.has(2));

// Eliminar del conjunto el elemento 1.
miSet.delete("1");
console.log(miSet);