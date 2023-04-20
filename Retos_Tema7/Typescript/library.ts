//-- Importar clase Book
import { Book } from "./book";

export class Library{
    //-- Atributos privados
    private books: Book[];
    private address: string;
    private manager: string;

    //-- Constructor
    constructor(books:Book[], address:string, manager:string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    //-- Métodos públicos
    //-- getters y setters
    getAddress():string{
        return this.address;
    }

    setAddress(address:string){
        this.address = address;
    }

    getManager():string{
        return this.manager;
    }

    setManager(manager:string){
        this.manager = manager;
    }

    //-- Métodos
    toString():string{
        let bookList:string = ``;
        for (let i:number = 0; i < this.books.length; i++) {
            bookList += `\nBook${i+1}:\n${this.books[i].toString()}\n`
        }
        return bookList;
    }

    getNumberOfBooks():number{
        return this.books.length;
    }

    findByAuthor(author:string):Book[]{
        return this.books.filter(book => book.getAuthor() == author);
    }
}