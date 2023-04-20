//-- Funcion que nos indica si en un array de numeros hay al menos un numero par.
function hasEven(myNums:number[]) {
    let i:number = 0;
    let hasEven:boolean = false;
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            hasEven = true;
        }
        i++;
    }
    return hasEven;
}

//-- Función que te indica si todos los nombre de un array empiezan por M.
function startWithM(myNames:string[]) {
    let i:number = 0;
    let startWithM:boolean = true;
    while (i < myNames.length) {
        if (myNames[i][0] != 'M') {
            startWithM = false;
        }
        i++;
    }
    return startWithM;
}


//-- Pruebas
console.log(`-------Funcion-hasEven-------`);
let numeros:number[] = [23,7,5,1,10];
let hayPar = hasEven(numeros);
console.log(hayPar);
console.log(`-----------------------------`);

console.log(`------Funcion-startWithM-----`);
let nombres:string[] = ["Manuel", "Mia","Minji","macarena"];
let startM = startWithM(nombres);
console.log(startM);
console.log(`-----------------------------`);

