// Crear dos variables
let a = 1;
let b = 7;

// Calcular el producto
let producto = a * b;
console.log(producto);

// Crear variable tipo string
let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus nuncquam, nec dictum erat feugiat vitae."

// Mostrar numero de caracteres de la variable tipo string
console.log(texto.length);

// Eliminar espacios en blanco
let sinEspacios = texto.split(' ').join('');
console.log(sinEspacios);

// Boolean
let productoBool = (producto > 30);
console.log(productoBool);

let textoBool = (texto.includes('amet'));
console.log(textoBool);