let suma = (array) => {
    if (typeof array == "undefined") {
        return "No has introducido un array como parámetro de entrada.";
    }else{
        if (Array.isArray(array)) {
            let sum = array.reduce(
                function (accumulator, value, index) {
                    return accumulator + value;
                }
            )
            return sum;
        }else{
            return 0;
        }
    } 
}

let array1 = [5,1,3,7];
console.log(suma("hola"));
console.log(suma());
console.log(suma(array1));