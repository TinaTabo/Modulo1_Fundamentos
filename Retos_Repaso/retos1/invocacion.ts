//-- Importar funciones
import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let array1:string[] = ["Casa","Coche","Ciudad","Cesta"];
let array2:string[] = ["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"];
let array3:string[] = ["Venezuela","Veneno","Voltaje"];

let sumArr1:number = add(array1);
isEven(sumArr1);

let sumArr2:number = add(array2);
isEven(sumArr2);

let sumArr3:number = add(array3);
isEven(sumArr3);