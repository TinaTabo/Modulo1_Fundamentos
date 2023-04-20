// Importar clase
import {Person} from "./person";

export class Contacts{
    // Atributos públicos
    people: Person[];

    // Constructor
    constructor(){
        this.people = [];
    }

    // Métodos públicos
    printCalendar():void{
        this.people.forEach(person => {
            console.log("-------------------------");
            console.log(person);
        })
    }
}