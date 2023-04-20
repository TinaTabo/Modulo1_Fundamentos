//-- Importar clases
import { Point } from "./point";

//-- Pruebas
console.log(`------------------------------------------`);
let x:number = 10;
let y:number = 7;
let punto:Point = new Point(x,y);
console.log(`Punto inicial = ${punto.toString()}`);

punto.setX(5);
punto.setY(4);
console.log(`x = ${punto.getX()}`);
console.log(`y = ${punto.getY()}`);
console.log(`Punto modificado = ${punto.toString()}`);

console.log(`------------------------------------------`);

let distPuntoOrigen:number = punto.distanceToIOrigin();
console.log(`La distancia desde (0,0) hasta ${punto.toString()} es = ${distPuntoOrigen.toFixed(2)}`);

console.log(`------------------------------------------`);

let punto2:Point = new Point(20,15);
let distPuntoPunto:number = punto.calculateDistance(punto2);
console.log(`La distancia desde ${punto.toString()} hasta ${punto2.toString()} es = ${distPuntoPunto.toFixed(2)}`);

console.log(`------------------------------------------`);

let cuadr1:Point = new Point(10,7);
let cuadr2:Point = new Point(-10,7);
let cuadr3:Point = new Point(-10,-7);
let cuadr4:Point = new Point(10,-7);
let eje:Point = new Point(0,7);

console.log(`El punto ${cuadr1.toString()} esta en el cuadrante: ${cuadr1.calcularQuadrant()}`);
console.log(`El punto ${cuadr2.toString()} esta en el cuadrante: ${cuadr2.calcularQuadrant()}`);
console.log(`El punto ${cuadr3.toString()} esta en el cuadrante: ${cuadr3.calcularQuadrant()}`);
console.log(`El punto ${cuadr4.toString()} esta en el cuadrante: ${cuadr4.calcularQuadrant()}`);
console.log(`El punto ${eje.toString()} esta en el cuadrante: ${eje.calcularQuadrant()}`);

console.log(`------------------------------------------`);

let point1:Point = new Point(1,1);
let point2:Point = new Point(2,2);
let point3:Point = new Point(3,3);
let point4:Point = new Point(4,4);
let points:Point[] = [point4,point3,point2];
console.log(`El punto mas cercano del array al punto ${point1.toString()} es el punto: ${point1.calculateNearest(points)}`);

console.log(`------------------------------------------`);