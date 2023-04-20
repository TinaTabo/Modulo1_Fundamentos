// Definir un producto
let producto = {
    importeNeto: 1500,
    origen: "España"
}

// Calcular importe bruto
let importeBruto = 0;
if (producto.origen == "España") {
    if (producto.importeNeto >= 2000) {
        importeBruto = producto.importeNeto - (producto.importeNeto * (16/100));
    }else{
        importeBruto = producto.importeNeto - (producto.importeNeto * (10/100));
    }
}else{
    if (producto.importeNeto >= 2000) {
        importeBruto = producto.importeNeto - ((producto.importeNeto * (16/100)) + (producto.importeNeto * (10/100)));
    }else{
        importeBruto = producto.importeNeto - ((producto.importeNeto * (10/100)) + (producto.importeNeto * (10/100)));
    }
}

console.log(importeBruto);