//-- Importar clase
import { EasyCalc } from "./easyCalc";

//-- Pruebas
new EasyCalc();
console.log("`----------INICIO----------")
console.log(EasyCalc.getResultado());
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());
console.log("`--------------------------")

console.log("`----------SUMA----------")
EasyCalc.suma([2,3,5]);
console.log(EasyCalc.getResultado());
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());
console.log("`--------------------------")

console.log("`----------RESTA----------")
EasyCalc.resta([10,2,3]);
console.log(EasyCalc.getResultado());
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());
console.log("`--------------------------")

console.log("`------MULTIPLICACION------")
EasyCalc.multiplicacion([2,2,2]);
console.log(EasyCalc.getResultado());
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());
console.log("`--------------------------")

console.log("`--------DIVISION----------")
EasyCalc.division([10,2]);
console.log(EasyCalc.getResultado());
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());
console.log("`--------------------------")

console.log("`--------RESETEAR----------")
EasyCalc.resetear();
console.log(EasyCalc.getResultado());
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());
console.log("`--------------------------")
