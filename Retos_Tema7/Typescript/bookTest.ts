//-- Importar clase
import { Book } from "./book";

let book:Book = new Book("Viuda de Hierro", 512, "978-84-272-2470-4", "Xiran Jay Zhao", "Molino");

//-- Pruebas
console.log("-------------------------");
console.log(book.toString());
console.log("-------------------------");

console.log(book.getTitle());
book.setTitle("Trono de Cristal");

console.log(book.getNPages());
book.setNPages(492);

console.log(book.getIsbn());
book.setIsbn("978-84-18359-28-6");

console.log(book.getAuthor());
book.setAuthor("Sarah J.Maas");

console.log(book.getEditorial());
book.setEditorial("Hidra");

console.log("-------------------------");
console.log(book.toString());
console.log("-------------------------");
