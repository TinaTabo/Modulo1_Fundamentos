export class Book{
    //-- Atributos privados
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    //-- Constructor
    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    //-- Métodos públicos
    //-- getters y setters
    getTitle():string{
        return this.title;
    }

    setTitle(title:string){
        this.title = title;
    }

    getNPages():number{
        return this.nPages;
    }

    setNPages(nPages:number){
        this.nPages = nPages;
    }

    getIsbn():string{
        return this.isbn;
    }

    setIsbn(isbn:string){
        this.isbn = isbn;
    }

    getAuthor():string{
        return this.author;
    }

    setAuthor(author:string){
        this.author = author;
    }

    getEditorial():string{
        return this.editorial;
    }

    setEditorial(editorial:string){
        this.editorial = editorial;
    }

    //-- Métodos
    toString():string{
        return `Title - ${this.title}\nNumber of Pages - ${this.nPages}\nISBN - ${this.isbn}\nAuthor - ${this.author}\nEditorial - ${this.editorial}`
    }
}