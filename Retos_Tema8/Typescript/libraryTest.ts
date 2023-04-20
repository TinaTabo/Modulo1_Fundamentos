//-- Importar clases
import { Book } from "./book";
import { Library } from "./library";

//-- Pruebas
let libro1:Book = new Book("Viuda de Hierro", 512, "978-84-272-2470-4", "Xiran Jay Zhao", "Molino");
let libro2:Book = new Book("Trono de Cristal", 492, "978-84-18359-28-6", "Sarah J.Maas", "Hidra");

let arrayLibros:Book[] = [libro1, libro2];

let libreria:Library = new Library(arrayLibros, "Madrid", "Manuela Soler");

console.log("------------------------------");
console.log(libreria.getAddress());
libreria.setAddress("León");

console.log("------------------------------");
console.log(libreria.getManager());
libreria.setManager("LyonBooks");

console.log("------------------------------");
console.log(libreria.toString());
console.log("------------------------------");

console.log(`Números de libros en la libreria: ${libreria.getNumberOfBooks()}`);

console.log("------------------------------");
console.log(`Libros en la librería del autor Xiran Jay Zhao:\n${libreria.findByAuthor("Xiran Jay Zhao")}`);
console.log("------------------------------");
