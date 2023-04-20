// Importar clase
import {Person} from "./person";

// Pruebas
let persona:Person = new Person("Jin",29,"Incheon, Seoul");
persona.printName();

let date:Date = new Date();
let currentYear:number = date.getFullYear();
console.log(`Edad: ${persona.age}, Año de nacimiento: ${persona.yearOfBirth(currentYear)}`);

console.log(persona.getAddress());
persona.setAddress("León,España");
console.log(persona.getAddress());

