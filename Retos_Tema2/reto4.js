// Crear objeto literal
let direccion ={
    calle: "Hongdae Street",
    numero: 7,
    piso: 13,
    puerta: "D"
}

// Igualar una nueva variable la variable direccion
let direccion2 = direccion;

// Utilizar spreads operator para realizar una copia de dirección en una nueva variable
let direccion3 = {...direccion};

// Añadir el campo ciudad a la variable direccion y mostrar las 3 variables por consola.
direccion.ciudad = "Seoul";
console.log("----DIRECCION-1----");
console.log(direccion);
console.log("----DIRECCION-2----");
console.log(direccion2);
console.log("----DIRECCION-3----");
console.log(direccion3);

// Crear array de nombres, e igualar la variable nombres2 a la variable nombres
let nombres = ["RM", "Jin", "Suga", "J-Hope", "Jimin", "V"];
let nombres2 = nombres;

// Utilizar el spreads operator para copiar la variable nombres en la variable nombres3
let nombres3 = [...nombres];

// Añadir un nuevo nombre a la variable nombres y mostrar las 3 variables por consola.
nombres.push("Jungkook");
console.log("----NOMBRES-1----");
console.log(nombres);
console.log("----NOMBRES-2----");
console.log(nombres2);
console.log("----NOMBRES-3----");
console.log(nombres3);

// Añadir nuevo campo a direccion3 y concatenarlo con direccion1 usando spreads operator
direccion3.pais = "corea del sur";
let direccionConcatenada = {...direccion, ...direccion3};
console.log("----DIRECCIONES-CONCATENADAS----");
console.log(direccionConcatenada);

// Concatenar usando spreads operator nombres y nombres3
let nombresConcatenados = [...nombres, ...nombres3];
console.log("----NOMBRES-CONCATENADOS----");
console.log(nombresConcatenados);