// Importar clases
import { Person } from "./person";
import { Contacts } from "./contacts";

let persona1:Person = new Person("Cris", 25, "Piedrafita de Babia, León");
let persona2:Person = new Person("Loli", 39, "Leganés,Madrid");

let contactos:Contacts = new Contacts();
contactos.people = [persona1, persona2];
contactos.printCalendar();

