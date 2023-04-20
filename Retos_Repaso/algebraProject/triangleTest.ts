//-- Importar clases
import { Point } from "./point";
import { Triangle } from "./triangle";

//-- Pruebas
let vertex1:Point = new Point(2,2);
let vertex2:Point = new Point(3,-1);
let vertex3:Point = new Point(-1,1);

let myTriangle:Triangle = new Triangle(vertex1,vertex2,vertex3);

console.log(`--------------------------------------`);

console.log(myTriangle.calculateLengthSides());

console.log(`--------------------------------------`);
