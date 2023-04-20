class Converter{
    //-- Atributos
    sentence: string;

    //-- Constructor
    constructor(sentence:string){
        this.sentence = sentence;
    }

    //-- Metodos
    toCamelCase():string{
        let array = this.sentence.split(" ");
        for (let i:number = 0; i < array.length; i++) {
            if (i == 0) {
                array[i] = array[i][0].toLowerCase() + array[i].substring(1).toLowerCase();
            }
            if (i != 0) {
                array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLowerCase();
            }
        }
        return array.join("");
    }

    toPascalCase():string{
        let array = this.sentence.split(" ");
        for (let i:number = 0; i < array.length; i++) {
            array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLocaleLowerCase();
        }
        return array.join("");
    }

    toSnakeCase():string{
        let array = this.sentence.split(" ");
        for (let i:number = 0; i < array.length; i++) {
            array[i] = array[i].toLowerCase();
        }
        return array.join("_");
    }
}

//-- Pruebas
let nombre:Converter = new Converter("convertir string en nombre funcion");
console.log(nombre.toCamelCase());
console.log(nombre.toPascalCase());
console.log(nombre.toSnakeCase());
