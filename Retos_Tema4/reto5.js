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

// Mostrar el nombre de todas las personas que tengan el pelo castaño
for (let persona of personas) {
    if (persona.colorPelo == "Castaño") {
        console.log(persona.nombre);
    }
}


// Mostrar la edad de todos los que sean mayores de 30
let hoy = new Date();
for (let persona of personas) {
    if ((hoy.getFullYear() - persona.añoNacimiento) > 30) {
        console.log(hoy.getFullYear() - persona.añoNacimiento);
    }
}



/* Mostrar el lugar de nacimiento de todos los que:
    - tengan el pelo negro y el dni caducado.
    - son menores de edad y su aficion sea comer o dormir.
*/

// Primero calculamos la fecha de validez del dni
/* - si añosPersona < 5 años --> validez de 2 años
   - si 5 < añosPersona < 30 --> validez de 5 años
   - si 30 < añosPersona < 70 --> validez de 10 años
   - si añosPersona > 70 --> validez permanente.
*/

for (let persona of personas) {
    let dniVal = 0;
    if((hoy.getFullYear() - persona.añoNacimiento) < 5){
        dniVal = persona.dni.añoExpedicion + 2;
    }else if (5 < (hoy.getFullYear() - persona.añoNacimiento) && (hoy.getFullYear() - persona.añoNacimiento) < 30) {
        dniVal = persona.dni.añoExpedicion + 5;
    }else if (30 < (hoy.getFullYear() - persona.añoNacimiento) && (hoy.getFullYear() - persona.añoNacimiento) < 70) {
        dniVal = persona.dni.añoExpedicion + 10;
    }else{
        dniVal = Infinity;
    }
    // Llegados a este punto tengo la fecha de validez del dni de la persona.
    // Toca comprobar las condiciones:
    if ((persona.colorPelo == "Negro" && dniVal < hoy.getFullYear()) || 
    ((hoy.getFullYear() - persona.añoNacimiento) < 18 && 
    (persona.aficiones.includes("comer") == true || persona.aficiones.includes("dormir") == true))) {
        console.log(persona.dni.lugarNacimiento);
    }
}