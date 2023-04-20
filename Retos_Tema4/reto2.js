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

// Mostrar todas las propiedades y su valor
for (let i = 0; i < personas.length; i++) {
    for (let propiedad in personas[i]) {
        let resultado = "";
        if (propiedad == "dni") {
            resultado = `La propiedad es: ${propiedad}, el valor es: `;
            for (let key in personas[i].dni) {
                resultado += `${key} = ${personas[i].dni[key]}, `;
            }
            console.log(resultado);
        } else {
            resultado = `La propiedad es: ${propiedad}, el valor es: ${personas[i][propiedad]}`;
            console.log(resultado);
        }
    }
}


// Mostrar todos los elementos del array por consola
// bucle for
console.log("--------------FOR--------------");
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}

// bucle while
console.log("-------------WHILE-------------");
let i = 0;
while (i < personas.length) {
    console.log(personas[i]);
    i++
}

// bucle for...of
console.log("-----------FOR...OF------------");
for (let persona of personas) {
    console.log(persona);
}
