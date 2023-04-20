//-- Importar clases
import { Point } from "./point";

export class Triangle{
    //-- Atributos
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    //-- Constructor
    constructor(vertex1:Point, vertex2:Point, vertex3:Point){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    //-- Métodos
    calculateLengthSides():number[]{
        /*Lados de un triangulo:
            - a => distancia entre vertex1 y vertex 2.
            - b => distancia entre vertex2 y vertex 3.
            - c => distancia entre vertex3 y vertex 1.
        */
        let a:number = this.vertex1.calculateDistance(this.vertex2);
        let b:number = this.vertex2.calculateDistance(this.vertex3);
        let c:number = this.vertex3.calculateDistance(this.vertex1);

        let distArr:number[] = [a,b,c];
        return distArr;
    }
}