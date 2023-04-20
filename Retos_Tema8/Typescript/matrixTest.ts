//-- Importar clases
import { Matrix } from "./matrix";

//-- Pruebas
let matriz:Matrix = new Matrix(3,3,10);
matriz.print();
let matriz2:Matrix = new Matrix(3,3,10);
matriz2.print();

console.log(`------------Suma-------------`);
let suma = matriz.add(matriz2);
suma.print();

console.log(`--------Multiplicación-X-N-----`);
let multN = matriz.multNumber(2);
multN.print();

console.log(`--------Multiplicación-Special-----`);
let multSpecial = matriz.multSpecial(2);
multSpecial.print();

