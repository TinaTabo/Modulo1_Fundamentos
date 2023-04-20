//-- Importar clases
import { Vector } from "./vector";

//-- Pruebas
let vector:Vector = new Vector(3,10);
let vector2:Vector = new Vector(3,10);

vector.print();
vector2.print();

console.log(`------------Suma-------------`);
let suma:Vector = vector.add(vector2);
console.log(suma);

console.log(`------------Resta------------`);
let resta:Vector = vector.subs(vector2);
console.log(resta);

console.log(`--------Multiplicación-------`);
let mult:Vector = vector.mult(vector2);
console.log(mult);

console.log(`--------Multiplicación-X-N-----`);
let multN:Vector = vector.multNumber(2);
console.log(multN);