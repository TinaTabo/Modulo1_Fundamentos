export class Vector{
    //-- Atributos privados
    private elements: number[];

    //-- Constructor
    constructor(n:number, k:number){
        this.elements = [];
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random()*(k+1)));
        }
    }

    //-- Métodos públicos
    //-- getters y setters
    getElements():number[]{
        return this.elements;
    }

    //-- Métodos
    print():void{
        console.log(this.elements);
    }

    add(v1:Vector):Vector{
        let vectorSuma:Vector = new Vector(0,0);
        for (let i = 0; i < this.elements.length; i++) {
            vectorSuma.elements[i] = v1.elements[i] + this.elements[i];
        }
        return vectorSuma;
    }

    subs(v1:Vector):Vector{
        let vectorResta:Vector = new Vector(0,0);
        for (let i = 0; i < this.elements.length; i++) {
            vectorResta.elements[i] = this.elements[i] - v1.elements[i];
        }
        return vectorResta;
    }

    mult(v1:Vector):Vector{
        let vectorMult:Vector = new Vector(0,0);
        for (let i = 0; i < this.elements.length; i++) {
            vectorMult.elements[i] = this.elements[i] * v1.elements[i];
        }
        return vectorMult;
    }

    multNumber(n:number):Vector{
        let vectorMult:Vector = new Vector(0,0);
        for (let i = 0; i < this.elements.length; i++) {
            vectorMult.elements[i] = this.elements[i] * n;
        }
        return vectorMult;
    }
}