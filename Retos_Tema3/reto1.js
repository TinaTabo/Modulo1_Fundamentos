// Utilizar una sentencia if para indicar a un peaton si puede cruzar o no
// dependiendo del estado del semaforo y el trafico.

let pasanCoches = false;
let semaforo = "verde";

// secuencia if/else
if(semaforo == "verde" && pasanCoches == false){
    console.log("Puede cruzar");
}else{
    console.log("No puede cruzar");
}

// condicionales ternarios
let cruzar = "";
cruzar = (semaforo == "verde" && pasanCoches == false) ? "Puede cruzar" : "No puede cruzar";
console.log(cruzar);