// Funcion que imprime siempre lo que se le pasa por parametro.
// Si no se le pasa nada, informa de la situación.
function imprimir(a) {
    if (typeof a !== 'undefined') {
        console.log(a);
    }else{
        console.log('No se ha recibido ningún parametro de entrada.');
    }
}

// Pruebas
imprimir("hola");
imprimir(1456);
imprimir(true);
imprimir([1,2,3,4,5]);
imprimir();