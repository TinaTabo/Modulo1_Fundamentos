//-- Importar clase
let myClassLib = require("./person");

//-- Pruebas
let hobbies = ["comer","videojuegos","leer","kdramas"];
let persona = new myClassLib.Person('Olivia','Fernandez',75,165,'Española',1998,hobbies);

let imc = persona.calcIMC();
console.log(`IMC = ${imc}`);

let edad = persona.calcAge();
console.log(`${persona.name} tiene ${edad} años.`);

persona.printAll();

persona.printHobbies();