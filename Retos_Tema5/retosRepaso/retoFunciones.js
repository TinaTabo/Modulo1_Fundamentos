//--Array de ovejas
let ovejas = [
    {
        nombre: "Luna",
        color: "Blanco"
    },
    {
        nombre: "Mora",
        color: "Rojo"
    },
    {
        nombre: "Lucera",
        color: "Negro"
    },
    {
        nombre: "Rubia",
        color: "Marrón"
    },
    {
        nombre: "Altanera",
        color: "Rojo"
    }
]

function ovejasRojas(arrOvejas) {
    let arrOvejasRojas = [];
    for (let i = 0; i < arrOvejas.length; i++) {
        if (arrOvejas[i].color == "Rojo" && arrOvejas[i].nombre.includes("n") == true
            && arrOvejas[i].nombre.includes("a") == true) {
            arrOvejasRojas.push(arrOvejas[i]);
        }
    }
    return arrOvejasRojas
}

let listaOvejasRojas = ovejasRojas(ovejas);
console.log(listaOvejasRojas);