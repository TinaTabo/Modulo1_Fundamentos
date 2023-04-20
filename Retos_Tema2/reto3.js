// Crear objeto literal
let persona = { nombre: "Pepe",
                edad: 35,
                esVaron: true,
                aficiones: ["nadar", "patinar", "leer"],
                dni: { numero: 44556677,
                       fechaDeExpedicion: "20 de Marzo de 2010"}}

// Mostrar su nombre
console.log(persona.nombre);

//Mostrar todas sus aficiones
console.log(persona.aficiones);

// Mostrar solo su segunda aficion
console.log(persona.aficiones[1]);

// Mostrar todos los datos de su dni
console.log(persona.dni);

// Mostrar solo la fecha de expedicion de su dni
console.log(persona.dni.fechaDeExpedicion);

// Modificar la fecha de expedicion de su dni
persona.dni.fechaDeExpedicion = "29 de febrero de 2013"
console.log(persona.dni.fechaDeExpedicion);

// Eliminar la segunda aficion
persona.aficiones.splice(1,1);
console.log(persona.aficiones);

// Agregar una nueva aficion
persona.aficiones.push('programar');
console.log(persona.aficiones);