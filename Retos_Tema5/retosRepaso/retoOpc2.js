// Crear map para objeto literal
let objMap = new Map();
objMap.set("nombre", "Cristina");
objMap.set("tienePerro", true);
objMap.set("numPerros", 1);

// Crear set para objeto literal
let objSet = new Set();
objSet.add("Oliver");
objSet.add(4);
objSet.add(false);

let objSet2 = new Set();
objSet2.add("Pepa");
objSet2.add(24);
objSet2.add(true);

let objSet3 = new Set();
objSet3.add("Loli");
objSet3.add(44);


// Definir objeto literal
let misDatos = {
    miNumero: 25,
        miBoolean: false,
        miString: "URJC ",
        miArrayNumber: [10,20,30,40,50,60,70,80,90,100],
        miArrayString: ["Programacion", "Acustica", "Sistemas", "Imagen", "Sonido"],
        miMap: objMap,
        miSet: objSet
}

let misDatos2 = {
    miNumero: 50,
        miBoolean: false,
        miString: "Hola Mundo",
        miArrayNumber: [1,56,7],
        miArrayString: ["Hola", "que", "tal", "?"],
        miMap: objMap,
        miSet: objSet2
}

let misDatos3 = {
    miNumero: 5456,
        miBoolean: true,
        miString: "Codenotch",
        miArrayNumber: [3,2,1,0],
        miArrayString: ["Vamos", "a", "programar", "!"],
        miMap: objMap,
        miSet: objSet3
}

let misDatos4 = {
    miNumero: 911,
        miBoolean: false,
        miString: "Policia",
        miArrayNumber: [112,911,091],
        miArrayString: ["Llamada", "emergencias", "medico"],
        miMap: objMap,
        miSet: objSet
}

let misDatos5 = {
    miNumero: 712896,
        miBoolean: true,
        miString: "Army",
        miArrayNumber: [1,2,3,4,5,6,7],
        miArrayString: ["Blood", "Sweat", "and", "tears"],
        miMap: objMap,
        miSet: objSet3
}

let misDatos6 = {
    miNumero: 1,
        miBoolean: true,
        miString: "BTS",
        miArrayNumber: [7,0],
        miArrayString: ["RM", "Jin", "Suga", "J-Hope", "Jimin", "V", "Jungkook"],
        miMap: objMap,
        miSet: objSet2
}


// Crear array con 5 elementos del tipo misDatos
let miArrayDatos =[misDatos,misDatos2,misDatos3,misDatos4,misDatos5];
// console.log(miArrayDatos);


// Crear un map de 6 elementos de tipo misDatos
let miMapaDatos = new Map();
miMapaDatos.set(1,misDatos);
miMapaDatos.set(2,misDatos2);
miMapaDatos.set(3,misDatos3);
miMapaDatos.set(4,misDatos4);
miMapaDatos.set(5,misDatos5);
miMapaDatos.set(6,misDatos6);
// console.log(miMapaDatos);


// Crear un set de 3 elementos de tipo misDatos
let miSetDatos =  new Set();
miSetDatos.add(misDatos);
miSetDatos.add(misDatos2);
miSetDatos.add(misDatos3);
// console.log(miSetDatos);


// miArrayDatos => obtener el valor guardado de cualquier clave del campo miMap del elemento 2
function valuesMiMapElement2(array) {
    let valuesMiMapElement2 = [];
    for (const [key,value] of array[1].miMap) {
        valuesMiMapElement2.push(value);
    }
    return valuesMiMapElement2;
}

let valuesMiMap2 = valuesMiMapElement2(miArrayDatos);
console.log(valuesMiMap2);
console.log(`--------------------------------------`);


// miMapDatos => obtener el numero de elementos del campo miSet del valor asociado a la clave elegida
function setLengthInMap(map,key) {
    let setLength = 0;
    let obj = map.get(key);
    setLength = obj.miSet.size;
    return setLength;
}

let setLength = setLengthInMap(miMapaDatos,4);
console.log(setLength);
console.log(`--------------------------------------`);


// miSetDatos => obtener el string del elemento elegido
function stringFromSet(set,elemento) {
    let arr = Array.from(set);
    if (elemento > 0 && elemento <= 3) {
        return arr[elemento-1].miString;
    }else{
        return "No existe el elemento solicitado."
    }
}

let miStringFromSet = stringFromSet(miSetDatos, 2);
console.log(miStringFromSet);
console.log(`--------------------------------------`);


// miArrayDatos => obtener el valor del string guardado en la posición 2 del campo myArrayString,
//                 del elemento del array miArrayDatos que está en la posición 1.
let string = miArrayDatos[0].miArrayString[1];
console.log(string);
console.log(`--------------------------------------`);


// miMapDatos => insertar nuevo elemento en el campo miMap del elemento elegido.
function addMapElement(map,elemento,key,value) {
    map.get(elemento).miMap.set(key,value);
}

let elemento = 2;
addMapElement(miMapaDatos, elemento, "nombrePerro", "Oliver");
console.log(miMapaDatos.get(elemento));
console.log(`--------------------------------------`);

// miSetDatos => eliminar todo el contenido de miSet del elemento elegido.
function deleteSet(set,elemento) {
    for (const element of set) {
        console.log(element === elemento);
        if (element === elemento) {
            element.miSet.clear();
        }
    }
}

deleteSet(miSetDatos, misDatos2)
console.log(miSetDatos);
console.log(`--------------------------------------`);


// miMapDatos => Mostrar el contenido de todos los conjuntos utilizando for...of
console.log('-----------ITERAR-MAPA--------------');
for (const [key,value] of miMapaDatos) {
    console.log(`-----------${key}----------- `);
    console.log('{');
    for (const clave in value) {
        console.log(`   ${clave}: ${value[clave]}`);
    }
    console.log('}');
}
console.log(`--------------------------------------`);


// miSetDatos => Mostrar todas las propiedades de todos los json almacenados utilizando for...of y for...in
console.log('-----------ITERAR-SET--------------');
for (const json of miSetDatos) {
    console.log('{');
    for (const key in json) {
        console.log(`   ${key}: ${json[key]}`);
    }
    console.log('}');
}