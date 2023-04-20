// Exportar clase
export class Person{
    // Declaración de atributos o propiedades

    //-- Atributos públicos
    public name: string;
    public age: number;

    //-- Atributos privados.
    private address: string;

    // Implementación del método constructor
    constructor(name:string, age:number, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Implementación de los metodos getters y setters y del resto de metodos públicos.
    public printName():void{
        console.log(this.name);
    }

    public yearOfBirth(currentYear:number):number{
        return currentYear - this.age;
    }

    public setAddress(address:string){
        this.address = address;
    }

    public getAddress():string{
        return this.address;
    }
}