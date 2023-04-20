// Crear objeto literal
let persona = {
    nombre: "Daniela",
    apellidos: ["Gutierrez", "Garcia"],
    edad: 28,
    padres:[
        {
            nombre: "Juan",
            apellidos: ["Gutierrez", "Lopez"],
            edad: 64,
            padres: [
                {
                    nombre: "Ramon",
                    apellidos: ["Gutierrez", "Fandiño"],
                    edad: 95
                },
                {
                    nombre: "Maria",
                    apellidos: ["Lopez", "Sandoval"],
                    edad: 92
                }
            ]
        },
        {
            nombre: "Mercedes",
            apellidos: ["Garcia", "Martinez"],
            edad: 60,
            padres: [
                {
                    nombre: "Aurelio",
                    apellidos: ["Garcia", "Garcia"],
                    edad: 90
                },
                {
                    nombre: "Maricarmen",
                    apellidos: ["Martinez", "Caño"],
                    edad: 88
                }
            ]
        }
    ]
}

// Mostrar por consola el nombre del abuelo por parte de madre
console.log(persona.padres[1].padres[0].nombre);

// Mostrar el segundo apellido de la abuela por parte de padre
console.log(persona.padres[0].padres[1].apellidos[1]);

// Sumar a la edad de la madre, la edad del abuelo por parte de padre.
let edadMadre = persona.padres[1].edad;
let edadAbueloPadre = persona.padres[0].padres[0].edad;
let suma = edadMadre + edadAbueloPadre;
console.log(suma);

// Intercambiar las edades de los abuelos por parte de padre
let edadAbuelo = persona.padres[0].padres[0].edad;
let edadAbuela = persona.padres[0].padres[1].edad;

persona.padres[0].padres[0].edad = edadAbuela;
persona.padres[0].padres[1].edad = edadAbuelo;

console.log(persona.padres[0].padres[0].edad);
console.log(persona.padres[0].padres[1].edad);

// Añadirle a la abuela por parte de madre el segundo apellido del abuelo por parte de padre
persona.padres[1].padres[1].apellidos.push(persona.padres[0].padres[0].apellidos[1]);
console.log(persona.padres[1].padres[1].apellidos);

// Eliminar el primer apellido de la madre
persona.padres[1].apellidos.shift();
console.log(persona.padres[1].apellidos);

// Mostrar la última letra del segundo apellido del abuelo por parte de padre
let segundoApellidoAbuelo = persona.padres[0].padres[0].apellidos[1]
console.log(segundoApellidoAbuelo[segundoApellidoAbuelo.length - 1]);