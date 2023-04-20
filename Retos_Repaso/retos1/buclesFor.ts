//-- Función que imprime los numeros impares entre 1 y un numero dado
function evenNumbers(num:number) {
    for (let i = 1; i <= num; i+=2) {
        console.log(i);
    }
}

//-- Funcion para revertir un array
function myRevert(myArr:any[]) {
    let revertArr:any[] = [];
    for (let i:number = myArr.length - 1; i >= 0; i--) {
        revertArr.push(myArr[i]);
    }
    return revertArr;
}

//-- Función a la que se le pasa un array de colores e imprime en cada caso si el color esta en el arcoiris.
function isRainbow(colors:string[]) {
    for (let i = 0; i < colors.length; i++) {
        switch (colors[i]) {
            case `Rojo`:
            case `Naranja`:
            case `Amarillo`:
            case `Verde`:
            case `Añil`:
            case `Azul`:
            case `Violeta`:
                console.log(`El color ${colors[i]} SI está en el Arcoíris.`);
                break;
            default:
                console.log(`El color ${colors[i]} NO está en el Arcoíris.`);
                break;
        }
    }
}

//-- Funcion que suma los caracteres de todas las palabras de un array:string[]
function add(myWords:string[]) {
    let sum:number = 0;
    for (let i = 0; i < myWords.length; i++) {
        sum += myWords[i].length;
    }
    return sum;
}

//-- Exportar funcion add
export {add};


//-- Pruebas
console.log(`-----Funcion-evenNumbers-----`);
let numero:number = 10;
evenNumbers(numero);
console.log(`-----------------------------`);

console.log(`-------Funcion-myRevert-------`);
let numArray:number[] = [1,2,3,4,5];
let numArrayRevertido = myRevert(numArray);
console.log(numArrayRevertido);

let stringArray:string[] = ["?", "tal", "que", "Hola"]
let stringArrayRevertido = myRevert(stringArray);
console.log(stringArrayRevertido);
console.log(`-----------------------------`);

console.log(`-----Funcion-isRainbow-----`);
let colores:string[] = ["Marrón", "Verde", "Azul", "Plateado", "Violeta", "Cyan"];
isRainbow(colores);
console.log(`-----------------------------`);


console.log(`----------Funcion-add---------`);
let palabras:string[] = ["cris", "tabo"];
let suma:number = add(palabras);
console.log(`Todas los caracteres de las palabras del array suman: ${suma}`);
console.log(`-----------------------------`);