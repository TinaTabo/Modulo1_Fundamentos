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
                    edad: 95,
                    colorPelo: "castaño",
                    dinero: 60000,
                    coches: [
                        {
                            marca: "ferrari",
                            numeroAsientos: 5,
                            esElectrico: true
                        }
                    ]
                },
                {
                    nombre: "Maria",
                    apellidos: ["Lopez", "Sandoval"],
                    edad: 92,
                    colorPelo: "negro",
                    dinero: 80000,
                    coches: [
                        {
                            marca: "citroen",
                            numeroAsientos: 9,
                            esElectrico: true
                        }
                    ]
                }
            ],
            colorPelo: "negro",
            dinero: 50000,
            coches: [
                {
                    marca: "tesla",
                    numeroAsientos: 5,
                    esElectrico: true
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
                    edad: 90,
                    colorPelo: "rubio",
                    dinero: 40000,
                    coches: [
                        {
                            marca: "renault",
                            numeroAsientos: 5,
                            esElectrico: true
                        }
                    ]
                },
                {
                    nombre: "Maricarmen",
                    apellidos: ["Martinez", "Caño"],
                    edad: 88,
                    colorPelo: "negro",
                    dinero: 10000,
                    coches: [
                        {
                            marca: "nissan",
                            numeroAsientos: 9,
                            esElectrico: false
                        },
                        {
                            marca: "lexus",
                            numeroAsientos: 5,
                            esElectrico: true
                        }
                    ]
                }
            ],
            colorPelo: "castaño",
            dinero: 16000,
            coches: [
                {
                    marca: "seat",
                    numeroAsientos: 2,
                    esElectrico: true
                },
                {
                    marca: "mercedes",
                    numeroAsientos: 5,
                    esElectrico: false
                },
                {
                    marca: "audi",
                    numeroAsientos: 5,
                    esElectrico: false
                }
            ]
        }
    ],
    colorPelo: "verde",
    dinero: 75896,
    coches: [
        {
            marca: "renault",
            numeroAsientos: 5,
            esElectrico: false
        },
        {
            marca: "nissan",
            numeroAsientos: 5,
            esElectrico: false
        }
    ]
}

let padre = persona.padres[0];
let madre = persona.padres[1];
let abueloPadre = padre.padres[0];
let abuelaPadre = padre.padres[1];
let abueloMadre = madre.padres[0];
let abuelaMadre = madre.padres[1];

// Punto 2
// Comprobar si el abueloMadre tiene un coche electrico
for (let i = 0; i < abueloMadre.coches.length; i++) {
    if (abueloMadre.coches[i].esElectrico == true) {
        abueloMadre.dinero += 5000;
        abuelaMadre.dinero += 5000;
    }
}
console.log(`Dinero abueloMadre: ${abueloMadre.dinero}, Dinero abuelaMadre: ${abuelaMadre.dinero}`);

// Punto 6
// coger todos los coches electricos de la familia y darselos al hijo

//coches de los padres
for (let i = 0; i < persona.padres.length; i++) {
    for (let j = 0; j < persona.padres[i].coches.length; j++) {
        if (persona.padres[i].coches[j].esElectrico == true) {
            persona.coches.push(persona.padres[i].coches[j]);
            persona.padres[i].coches.splice(j,1);
        }
    }
}

// coches de los abuelos
for (let i = 0; i < persona.padres.length; i++) {
    for (let j = 0; j < persona.padres[i].padres.length; j++) {
        for (let k = 0; k < persona.padres[i].padres[j].coches.length; k++) {
            if (persona.padres[i].padres[j].coches[k].esElectrico == true) {
                persona.coches.push(persona.padres[i].padres[j].coches[k]);
                persona.padres[i].padres[j].coches.splice(k,1);
            }
        }
    }
}

console.log(persona.coches);


// Punto 5
// si todos en la familia menos el hijo tienen un coche electrico, cambiar el nombre al hijo.
// En caso contrario, crear un array de nombres con las personas que no tienen ningún coche electrico.

let arrNombres = [];

// coches del hijo.
for (let idx = 0; idx < persona.coches.length; idx++) {
    if (persona.coches[idx].esElectrico == true) {
        persona.tieneElectrico = true;
    }else{
        persona.tieneElectrico = false;
    }
}

//coches de los padres
for (let i = 0; i < persona.padres.length; i++) {
    for (let j = 0; j < persona.padres[i].coches.length; j++) {
        if (persona.padres[i].coches[j].esElectrico == true) {
            persona.padres[i].tieneElectrico = true;
        }else{
            persona.padres[i].tieneElectrico = false;
        }
    }
    if (persona.padres[i].tieneElectrico == false) {
        arrNombres.push(persona.padres[i].nombre);
    }else if (persona.padres[i].coches.length == 0) {
        arrNombres.push(persona.padres[i].nombre);
    }
}


// coches de los abuelos
for (let i = 0; i < persona.padres.length; i++) {
    for (let j = 0; j < persona.padres[i].padres.length; j++) {
        for (let k = 0; k < persona.padres[i].padres[j].coches.length; k++) {
            if (persona.padres[i].padres[j].coches[k].esElectrico == true) {
                persona.padres[i].padres[j].tieneElectrico = true;
            }else{
                persona.padres[i].padres[j].tieneElectrico = false;
            }
        }
        if (persona.padres[i].padres[j].tieneElectrico == false) {
            arrNombres.push(persona.padres[i].padres[j].nombre);
        }else if (persona.padres[i].padres[j].coches.length == 0) {
            arrNombres.push(persona.padres[i].padres[j].nombre);
        }
    }
}


if (persona.tieneElectrico == false && padre.tieneElectrico == true && madre.tieneElectrico == true
    && abueloPadre.tieneElectrico == true && abuelaPadre.tieneElectrico == true
    && abueloMadre.tieneElectrico == true && abuelaMadre.tieneElectrico == true) {
    persona.nombre = "Thomas Alva Edison";
}else{
    console.log(arrNombres);
}