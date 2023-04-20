// Procedimiento para ordenar una lista de numeros de menor a mayor
function ordenarMenorMayor(n1,n2,n3,n4,n5){
    let listaNum = [n1,n2,n3,n4,n5];
    let aux = 0;
    for (let i = 0; i < listaNum.length; i++) {
        for (let j = 0; j < listaNum.length - i; j++) {
            if (listaNum[j] > listaNum[j+1]) {
                aux = listaNum[j];
                listaNum[j] = listaNum[j+1];
                listaNum[j+1] = aux;
            }
        }
    }
    return listaNum;
}

// Pruebas
let n1 = 10;
let n2 = 4;
let n3 = 7;
let n4 = 3;
let n5 = 1;
let listaOrdenada = ordenarMenorMayor(n1,n2,n3,n4,n5);
console.log(listaOrdenada);