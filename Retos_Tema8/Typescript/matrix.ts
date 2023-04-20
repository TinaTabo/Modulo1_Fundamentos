//-- Importar clases
import { Vector } from "./vector";

export class Matrix{
    //-- Atributos privados
    private elements: Vector[];

    //-- Constructor
    constructor(n:number, m:number, k:number){
        this.elements = [];
        for (let i:number = 0; i < n; i++) {
            let vector:Vector = new Vector(m,k);
            this.elements[i] = vector;
        }
    }

    //-- Métodos públicos
    print():void{
        console.log(`[`);
        for (let i:number = 0; i < this.elements.length; i++) {
            console.log(`  [${this.elements[i].getElements()}]`);
        }
        console.log(`]`);
    }

    add(m1:Matrix):Matrix{
        let matrizSuma:Matrix = new Matrix(0,0,0);
        for (let i = 0; i < this.elements.length; i++) {
            matrizSuma.elements[i] = m1.elements[i].add(this.elements[i]);
        }
        return matrizSuma;
    }

    multNumber(n:number):Matrix{
        let matrizMultN:Matrix = new Matrix(0,0,0);
        for (let i = 0; i < this.elements.length; i++) {
            matrizMultN.elements[i] = this.elements[i].multNumber(n);
        }
        return matrizMultN;
    }

    multSpecial(n:number):Matrix{
        let matrizSpecial:Matrix = new Matrix(this.elements.length,0,0);

        for (let i:number = 0; i < this.elements.length; i++) {
            for (let j:number = 0; j < this.elements.length; j++) {
                let numberMatrix = this.elements[i].getElements()[j];
                if (numberMatrix % 2 == 0) {
                    matrizSpecial.elements[i].getElements()[j] = numberMatrix * n;
                }
                if(numberMatrix % 2 != 0){
                    matrizSpecial.elements[i].getElements()[j] = numberMatrix * (n-1);
                }
            }
        }
        return matrizSpecial;
    }
}