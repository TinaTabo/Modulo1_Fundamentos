// Lista de libros.
let libros = ['Ready Player One', 'El nombre del viento', 'El temor de un hombre sabio', 'Cien años de soledad', 'Origen'];

function libreria(arrLibros) {
    let count = 0;
    let idxLibroMasLargo = 0;
    for (let i = 0; i < libros.length; i++) {
        let countLibro = libros[i].length;
        if (count < countLibro) {
            count = countLibro;
            idxLibroMasLargo = i;
        }
    }
    // En este punto tenemos el valor del indice donde se encuentra el libro
    // con el nombre mas largo
    for (let j = 0; j < libros.length; j++) {
        if (j == idxLibroMasLargo) {
            console.log(`<b>${libros[j]}</b> [${libros.length}]`);
        }else{
            console.log(`${libros[j]} [${libros.length}]`);
        }
    }
}

// Llamada al procedimiento
libreria(libros);