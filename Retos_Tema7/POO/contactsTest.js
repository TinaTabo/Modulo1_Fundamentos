//-- Importar clase
let classPerson = require("./person");
let classContacts = require("./contacts");

//-- Crear Personas
let contacto1 = new classPerson.Person("Mari","Mayo",75,165,"Española",1988,["coser","leer"]);
let contacto2 = new classPerson.Person("Manuel","Taboada",90,185,"Española",1968,["caminar","cine"]);

//-- Crear Contactos
let contactos = new classContacts.Contacts();
contactos.arrPersons = [contacto1,contacto2];
contactos.printPersons();
