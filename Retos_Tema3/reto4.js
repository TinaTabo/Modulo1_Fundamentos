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
if(personas[0].colorPelo == "Castaño"){
    console.log(personas[0].nombre);
}
if(personas[1].colorPelo == "Castaño"){
    console.log(personas[1].nombre);
}
if(personas[2].colorPelo == "Castaño"){
    console.log(personas[2].nombre);
}
if(personas[3].colorPelo == "Castaño"){
    console.log(personas[3].nombre);
}

// Mostrar la edad de todos los que sean mayores de 30
let hoy = new Date();

if((hoy.getFullYear() - personas[0].añoNacimiento) > 30){
    console.log(hoy.getFullYear() - personas[0].añoNacimiento);
}
if((hoy.getFullYear() - personas[1].añoNacimiento) > 30){
    console.log(hoy.getFullYear() - personas[1].añoNacimiento);
}
if((hoy.getFullYear() - personas[2].añoNacimiento) > 30){
    console.log(hoy.getFullYear() - personas[2].añoNacimiento);
}
if((hoy.getFullYear() - personas[3].añoNacimiento) > 30){
    console.log(hoy.getFullYear() - personas[3].añoNacimiento);
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
let dniVal0;
let dniVal1;
let dniVal2;
let dniVal3;
if((hoy.getFullYear() - personas[0].añoNacimiento) < 5){
    dniVal0 = personas[0].dni.añoExpedicion + 2;
}
if((hoy.getFullYear() - personas[1].añoNacimiento) < 5){
    dniVal1 = personas[1].dni.añoExpedicion + 2;
}
if((hoy.getFullYear() - personas[2].añoNacimiento) < 5){
    dniVal2 = personas[2].dni.añoExpedicion + 2;
}
if((hoy.getFullYear() - personas[3].añoNacimiento) < 5){
    dniVal3 = personas[3].dni.añoExpedicion + 2;
}


if(5 < (hoy.getFullYear() - personas[0].añoNacimiento) && (hoy.getFullYear() - personas[0].añoNacimiento) < 30){
    dniVal0 = personas[0].dni.añoExpedicion + 5;
}
if(5 < (hoy.getFullYear() - personas[1].añoNacimiento) && (hoy.getFullYear() - personas[1].añoNacimiento) < 30){
    dniVal1 = personas[1].dni.añoExpedicion + 5;
}
if(5 < (hoy.getFullYear() - personas[2].añoNacimiento) && (hoy.getFullYear() - personas[2].añoNacimiento) < 30){
    dniVal2 = personas[2].dni.añoExpedicion + 5;
}
if(5 < (hoy.getFullYear() - personas[3].añoNacimiento) && (hoy.getFullYear() - personas[3].añoNacimiento) < 30){
    dniVal3 = personas[3].dni.añoExpedicion + 5;
}


if(30 < (hoy.getFullYear() - personas[0].añoNacimiento) && (hoy.getFullYear() - personas[0].añoNacimiento) < 70){
    dniVal0 = personas[0].dni.añoExpedicion + 10;
}
if(30 < (hoy.getFullYear() - personas[1].añoNacimiento) && (hoy.getFullYear() - personas[1].añoNacimiento) < 70){
    dniVal1 = personas[1].dni.añoExpedicion + 10;
}
if(30 < (hoy.getFullYear() - personas[2].añoNacimiento) && (hoy.getFullYear() - personas[2].añoNacimiento) < 70){
    dniVal2 = personas[2].dni.añoExpedicion + 10;
}
if(30 < (hoy.getFullYear() - personas[3].añoNacimiento) && (hoy.getFullYear() - personas[3].añoNacimiento) < 70){
    dniVal3 = personas[3].dni.añoExpedicion + 10;
}

if((hoy.getFullYear() - personas[0].añoNacimiento) > 70){
    console.log("DNI Permanente");
}
if((hoy.getFullYear() - personas[1].añoNacimiento) > 70){
    console.log("DNI Permanente");
}
if((hoy.getFullYear() - personas[2].añoNacimiento) > 70){
    console.log("DNI Permanente");
}
if((hoy.getFullYear() - personas[3].añoNacimiento) > 70){
    console.log("DNI Permanente");
};

// Ahora si, vamos a mostrar el lugar de nacimiento de las personas que cumples las condiciones
if((personas[0].colorPelo == "Negro" && dniVal0 < hoy.getFullYear()) || 
((hoy.getFullYear() - personas[0].añoNacimiento) < 18 && 
(personas[0].aficiones.includes("comer") == true || personas[0].aficiones.includes("dormir") == true))){
    console.log(personas[0].dni.lugarNacimiento);
}

if((personas[1].colorPelo == "Negro" && dniVal0 < hoy.getFullYear()) || 
((hoy.getFullYear() - personas[1].añoNacimiento) < 18 && 
(personas[1].aficiones.includes("comer") == true || personas[1].aficiones.includes("dormir") == true))){
    console.log(personas[1].dni.lugarNacimiento);
}

if((personas[2].colorPelo == "Negro" && dniVal0 < hoy.getFullYear()) || 
((hoy.getFullYear() - personas[2].añoNacimiento) < 18 && 
(personas[2].aficiones.includes("comer") == true || personas[2].aficiones.includes("dormir") == true))){
    console.log(personas[2].dni.lugarNacimiento);
}

if((personas[3].colorPelo == "Negro" && dniVal0 < hoy.getFullYear()) || 
((hoy.getFullYear() - personas[3].añoNacimiento) < 18 && 
(personas[3].aficiones.includes("comer") == true || personas[3].aficiones.includes("dormir") == true))){
    console.log(personas[3].dni.lugarNacimiento);
}