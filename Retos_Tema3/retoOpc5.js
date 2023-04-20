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
                    esElectrico: true
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

// Implementacion de condiciones
if (abuelaMadre != "castaño" && abueloPadre.coches.length == 1) {
    if (persona.colorPelo == "verde") {
        persona.colorPelo = "azul";
    }else{
        persona.colorPelo = "verde";
    }
}
console.log(persona.colorPelo);

//-----------------------------------------------------------------------------------

let dineroTotal = padre.dinero + madre.dinero + abueloPadre.dinero + abuelaMadre.dinero;
if (dineroTotal > 100000) {
    persona.coches.push({marca: "ferrari", numeroAsientos: 5, esElectrico: true});
    console.log(persona.coches);
}

//-----------------------------------------------------------------------------------

if (dineroTotal > 35000 && dineroTotal < 100000) {
    persona.coches.push({marca: "tesla", numeroAsientos: 5, esElectrico: true});
    console.log(persona.coches);
}

//-----------------------------------------------------------------------------------

if (dineroTotal < 35000) {
    persona.coches.push({marca: "peugeot", numeroAsientos: 5, esElectrico: true});
    console.log(persona.coches);
}

//-----------------------------------------------------------------------------------

let cochesPadre = padre.coches.length;
let cochesMadre = madre.coches.length;
if (cochesPadre > 2 || cochesMadre > 2) {
    let cocheRegalo;
    if (cochesPadre > 2) {
        cocheRegalo = padre.coches.shift();
        persona.coches.push(cocheRegalo);
    }else{
        cocheRegalo = madre.coches.shift();
        persona.coches.push(cocheRegalo);
    }
    console.log(persona.coches);
}

//-----------------------------------------------------------------------------------

if(abueloMadre.coches[0].esElectrico == true){
    abueloMadre.dinero += 5000;
    abuelaMadre.dinero += 5000;
    console.log(`Dinero abuelo: ${abueloMadre.dinero}, Dinero abuela: ${abuelaMadre.dinero}`)
}

//-----------------------------------------------------------------------------------

if (abuelaPadre.coches[0].numeroAsientos > abuelaMadre.coches[1].numeroAsientos) {
    abuelaMadre.coches.push({marca: "ford", numeroAsientos: 5, esElectrico: true})
    console.log(abuelaMadre.coches);
}

//-----------------------------------------------------------------------------------

if (abueloPadre.edad > abueloMadre.edad) {
    abueloPadre.nombre = "El abuelo más anciano de la familia";
}else{
    abueloMadre.nombre = "El abuelo más anciano de la familia";
}
console.log(`El abuelo por parte de padre se llama "${abueloPadre.nombre}" y el abuelo 
por parte de madre se llama "${abueloMadre.nombre}".`);

//-----------------------------------------------------------------------------------

let elecHijo = persona.coches.filter(x => x.esElectrico == true);
let elecPadre = padre.coches.filter(x => x.esElectrico == true);
let elecMadre = madre.coches.filter(x => x.esElectrico == true);
let elecAbueloPadre = abueloPadre.coches.filter(x => x.esElectrico == true);
let elecAbuelaPadre = abuelaPadre.coches.filter(x => x.esElectrico == true);
let elecAbueloMadre = abueloMadre.coches.filter(x => x.esElectrico == true);
let elecAbuelaMadre = abuelaMadre.coches.filter(x => x.esElectrico == true);

if(elecHijo.length == 0 && (elecPadre.length != 0 || elecMadre.length != 0 || elecAbueloPadre.length != 0 || 
    elecAbuelaPadre.length != 0 || elecAbueloMadre.length != 0 || elecAbuelaMadre.length != 0)){
        persona.nombre = "Thomas Alva Edison";
        console.log(persona.nombre);
}else{
    let arrNombre = [];
    if(elecPadre.length == 0){
        arrNombre.push(padre.nombre);
    }
    if(elecMadre.length == 0){
        arrNombre.push(madre.nombre);
    }
    if(elecAbueloPadre.length == 0){
        arrNombre.push(abueloPadre.nombre);
    }
    if(elecAbuelaPadre.length == 0){
        arrNombre.push(abuelaPadre.nombre);
    }
    if(elecAbueloMadre.length == 0){
        arrNombre.push(abueloMadre.nombre);
    }
    if(elecAbuelaMadre.length == 0){
        arrNombre.push(abuelaMadre.nombre);
    }
    console.log(arrNombre);
}

//-----------------------------------------------------------------------------------

console.log(elecPadre);
console.log(padre.coches.indexOf(elecPadre[0]));

// Coches del padre
let carsPadre = elecPadre.length;
for (let i = 0; i < carsPadre; i++) {
    let idx = padre.coches.indexOf(elecPadre[i]);
    persona.coches.push(padre.coches[idx]);
    padre.coches.splice(idx, 1);
}

// Coches de la madre
let carsMadre = elecMadre.length;
for (let i = 0; i < carsMadre; i++) {
    let idx = madre.coches.indexOf(elecMadre[i]);
    persona.coches.push(madre.coches[idx]);
    madre.coches.splice(idx, 1);
}

// Coches del abueloPadre
let carsAbueloPadre = elecAbueloPadre.length;
for (let i = 0; i < carsAbueloPadre; i++) {
    let idx = abueloPadre.coches.indexOf(elecAbueloPadre[i]);
    persona.coches.push(abueloPadre.coches[idx]);
    abueloPadre.coches.splice(idx, 1);
}

// Coches de la abuelaPadre
let carsAbuelaPadre = elecAbuelaPadre.length;
for (let i = 0; i < carsAbuelaPadre; i++) {
    let idx = abuelaPadre.coches.indexOf(elecAbuelaPadre[i]);
    persona.coches.push(abuelaPadre.coches[idx]);
    abuelaPadre.coches.splice(idx, 1);
}

// Coches del abueloMadre
let carsAbueloMadre = elecAbueloMadre.length;
for (let i = 0; i < carsAbueloMadre; i++) {
    let idx = abueloMadre.coches.indexOf(elecAbueloMadre[i]);
    persona.coches.push(abueloMadre.coches[idx]);
    abueloMadre.coches.splice(idx, 1);
}

// Coches de la abuelaMadre
let carsAbuelaMadre = elecAbuelaMadre.length;
for (let i = 0; i < carsAbuelaMadre; i++) {
    let idx = abuelaMadre.coches.indexOf(elecAbuelaMadre[i]);
    persona.coches.push(abuelaMadre.coches[idx]);
    abuelaMadre.coches.splice(idx, 1);
}

console.log(persona.coches);