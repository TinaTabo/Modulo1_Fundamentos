/* Elegir un restaurante si se cumple una de estas condiciones:
    - que haya 3 platos en el menu, que incluya DJ y dos horas de barra libre
    - que haya coctel de bienvenida, menú con dos platos y una hora de barra libre
*/

// variables
let platosMenu = 3; // nº de platos en el menu.
let dj = true; // incluye o no DJ.
let barraLibre = 2; // horas de barra libre.
let coctelBienvenida = true; // incluye o no coctel de bienvenida.

// if/case
if ((platosMenu == 3 && dj == true && barraLibre == 2) || (coctelBienvenida == true && platosMenu == 2 && barraLibre == 1)){
    console.log("Reservar restaurante.");
}else{
    console.log("Buscar otro restaurante");
}

// condicionales ternarios
let reservar = ((platosMenu == 3 && dj == true && barraLibre == 2) ||
(coctelBienvenida == true && platosMenu == 2 && barraLibre == 1)) 
? "Reservar restaurante" : "Buscar otro restaurante";
console.log(reservar);