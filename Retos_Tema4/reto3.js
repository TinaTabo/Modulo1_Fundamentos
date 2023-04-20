// Crear array con 4 personas tipo objeto.
let personas = [
    {
        nombre: "Pepe",
        apellido: "Garcia",
        añoNacimiento: 2007,
        aficiones: ["cantar", "leer", "dormir"],
        dni: {
            añoExpedicion: 2008,
            lugarNacimiento: "Leon"
        },
        colorPelo: "Negro"
    },
    {
        nombre: "Lucia",
        apellido: "Alvarez",
        añoNacimiento: 1995,
        aficiones: ["coser", "videojuegos"],
        dni: {
            añoExpedicion: 2000,
            lugarNacimiento: "Gijon"
        },
        colorPelo: "Castaño"
    },
    {
        nombre: "Javier",
        apellido: "Pinillas",
        añoNacimiento: 1991,
        aficiones: ["pintar", "futbol", "ciclismo"],
        dni: {
            añoExpedicion: 2020,
            lugarNacimiento: "Jaen"
        },
        colorPelo: "Rubio"
    },
    {
        nombre: "Lola",
        apellido: "Fernandez",
        añoNacimiento: 2002,
        aficiones: ["videojuegos", "leer", "comer"],
        dni: {
            añoExpedicion: 2015,
            lugarNacimiento: "Barcelona"
        },
        colorPelo: "Castaño"
    }
]

// Mostrar las personas nacidas entre 1978 y el 2000
// bucle for
console.log("--------------FOR--------------");
for (let i = 0; i < personas.length; i++) {
    if (personas[i].añoNacimiento > 1978 && personas[i].añoNacimiento < 2000) {
        console.log(personas[i]);
    }
}


// bucle while
console.log("-------------WHILE-------------");
let i = 0;
while (i < personas.length) {
    if (personas[i].añoNacimiento > 1978 && personas[i].añoNacimiento < 2000) {
        console.log(personas[i]);
    }
    i++;
}

// bucle for...of
console.log("-----------FOR...OF------------");
for (let persona of personas) {
    if (persona.añoNacimiento > 1978 && persona.añoNacimiento < 2000) {
        console.log(persona);
    }
}


// Mostrar mensaje
console.log("--------------------------------");
for (let persona of personas) {
    if (persona.añoNacimiento > 1978 && persona.añoNacimiento < 2000) {
        console.log(`${persona.nombre}: Tu edad está entre los 40 y 20 años.`);
    }else{
        console.log(`${persona.nombre}: Tu edad es menos de 20.`);
    }
}


// Agregar afición a todos los elementos del array personas.
//bucle for
console.log("--------------FOR--------------");
for (let i = 0; i < personas.length; i++) {
    personas[i].aficiones.push("jugar a la play (for)");
    console.log(personas[i]);
}
// bucle for...of
console.log("-----------FOR...OF------------");
for (let persona of personas) {
    if (persona.añoNacimiento > 1978 && persona.añoNacimiento < 2000) {
        persona.aficiones.push("jugar a la play (for...of)");
        console.log(persona);
    }
}