export class EasyCalc{
    //-- Atributos
    private static resultado: number;
    static historial: number[];
    static formatos: string[];

    //-- Constructor
    constructor(){
        EasyCalc.resultado = 0;
        EasyCalc.historial = [];
        EasyCalc.formatos = [];
    }

    //-- Métodos privados
    private static binario(num:number):string{
        return num.toString(2);
    }

    private static ASCII(num:number):string{
        let string:string = num.toString();
        let ascii:string = "";
        for (let i = 0; i < string.length; i++) {
            ascii += string.charCodeAt(i) + " ";
        }
        return ascii;
    }

    private static hexadecimal(num:number):string{
        return num.toString(16);
    }

    private static notCientifica(num:number):string{
        return num.toExponential();
    }

    //-- Si cambia el valor de resultado, se modifica el valor de historial y formatos.
    private static actualizarHistorial(historial:number[], valor):void{
        historial.push(valor);
        EasyCalc.setHistorial(historial);
    }

    private static actualizarFormatos(valor:number):void{
        let formatos = [
            `Binario: ${EasyCalc.binario(valor)}`,
            `ASCII: ${EasyCalc.ASCII(valor)}`,
            `Hexadecimal: ${EasyCalc.hexadecimal(valor)}`,
            `Notación Científica: ${EasyCalc.notCientifica(valor)}`
        ]

        EasyCalc.setFormatos(formatos);
    }

    //-- Métodos públicos
    //-- getters y setters
    static getResultado():number{
        return EasyCalc.resultado;
    }

    static setResultado(resultado:number){
        EasyCalc.resultado = resultado;
    }

    static getHistorial():number[]{
        return EasyCalc.historial;
    }

    static setHistorial(historial:number[]){
        EasyCalc.historial = historial;
    }

    static getFormatos():string[]{
        return EasyCalc.formatos;
    }

    static setFormatos(formatos:string[]){
        EasyCalc.formatos = formatos;
    }

    //-- Metodos de la calculadora
    static suma(numeros:number[]):void{
        let suma:number = 0;
        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }
        EasyCalc.setResultado(suma);
        EasyCalc.actualizarHistorial(EasyCalc.historial, suma);
        EasyCalc.actualizarFormatos(suma);
    }

    static resta(numeros:number[]):void{
        let resta:number = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
            resta -= numeros[i];
        }
        EasyCalc.setResultado(resta);
        EasyCalc.actualizarHistorial(EasyCalc.historial, resta);
        EasyCalc.actualizarFormatos(resta);
    }

    static multiplicacion(numeros:number[]):void{
        let multi:number = 1;
        for (let i = 0; i < numeros.length; i++) {
            multi *= numeros[i];
        }
        EasyCalc.setResultado(multi);
        EasyCalc.actualizarHistorial(EasyCalc.historial, multi);
        EasyCalc.actualizarFormatos(multi);
    }

    static division(numeros:number[]):void{
        let div:number = numeros[0];
        console.log(div);
        for (let i = 1; i < numeros.length; i++) {
            div /= numeros[i];
        }
        EasyCalc.setResultado(div);
        EasyCalc.actualizarHistorial(EasyCalc.historial, div);
        EasyCalc.actualizarFormatos(div);
    }

    //-- Metodo para inicializar de nuevo todos los atributos.
    static resetear():void{
        EasyCalc.setResultado(0);
        EasyCalc.setHistorial([]);
        EasyCalc.setFormatos([]);
    }
}

