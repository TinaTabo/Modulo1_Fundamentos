// Reto 3
// Crear variable map
let miMap = new Map();

miMap.set("numero", 1);
miMap.set(1, 1);
miMap.set("string", "Mi string");
miMap.set(2, "Mi string");
miMap.set("boolean", true);
miMap.set(3, true);
miMap.set("array", [1,2,3,4]);
miMap.set(4, ["Juan", "Pepe", "Ana", "Maria"]);

// Reto 4
// Mostrar por consola el contenido del map
console.log(miMap);

// Mostrar por consola el tamaño del map
console.log(miMap.size);

// Mostrar por consola el valor de la clave 3
console.log(miMap.get(3));

// Eliminar la tupla cuya clave es "string" y mostrar el nuevo map por consola.
miMap.delete("string");
console.log(miMap);