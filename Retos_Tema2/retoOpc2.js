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
                    apellidos: ["Martinez", "Carrera"],
                    edad: 88
                }
            ]
        }
    ]
}

// Imprimir por consola si es verdadero o falso que el primer apellido de la abuela por parte de madre
// es Martinez
console.log(persona.padres[1].padres[1].apellidos[0] == "Martinez");

// Imprimir por consola si es verdadero o falso que alguno de los apellidos del abuelo por parte de 
// padre es Perez
let primerApellido = persona.padres[0].padres[0].apellidos[0];
let segundoApellido = persona.padres[0].padres[0].apellidos[1];
console.log(primerApellido == "Perez" || segundoApellido == "Perez");

// Intercambiar todas las "r" del segundo apellido de la abuela por parte de madre por "z"
const regex = /r/ig;
persona.padres[1].padres[1].apellidos[1] = persona.padres[1].padres[1].apellidos[1].replace(regex, "z");
console.log(persona.padres[1].padres[1].apellidos[1]);

// Añadir otra clave más, la fecha de nacimiento a todos los objetos literales (utilizar metodo Date())
persona.fechaDeNacimiento = new Date(1995, 02, 10); // Fecha de nacimiento de la persona
persona.padres[0].fechaDeNacimiento = new Date(1959, 03, 14);// Fecha de nacimiento del padre
persona.padres[1].fechaDeNacimiento = new Date(1963, 00, 08); // Fecha de nacimiento de la madre
// Fecha de nacimiento de los abuelos por parte de padre
persona.padres[0].padres[0].fechaDeNacimiento = new Date(1928,01,02); // Fecha de nacimiento del abuelo
persona.padres[0].padres[1].fechaDeNacimiento = new Date(1931, 07, 31); // Fecha de nacimiento de la abuela.
//Fecha de nacimiento de los abuelos por parte de madre
persona.padres[1].padres[0].fechaDeNacimiento = new Date(1933, 06, 14); // Fecha de nacimiento del abuelo
persona.padres[1].padres[1].fechaDeNacimiento = new Date(1935, 11, 20); // Fecha de nacimiento de la abuela.

// Mostrar el año de nacimiento del abuelo por parte de padre
let año = persona.padres[0].padres[0].fechaDeNacimiento.getFullYear();
console.log(año);

// Mostrar el mes de nacimiento de la abuela por parte de madre
let mes = persona.padres[1].padres[1].fechaDeNacimiento.getMonth();
console.log(mes);