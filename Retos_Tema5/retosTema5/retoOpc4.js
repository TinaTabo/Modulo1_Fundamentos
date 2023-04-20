// Cifrador ASCII
function ascii_cipher(text){
    let textCipher = ""
    for (let i = 0; i < text.length; i++) {
        textCipher += text.charCodeAt(i) + " ";
    }

    return textCipher;
}


let texto = "Codenotch and Javascript are awesome!";
let textoCifrado = ascii_cipher(texto);
console.log(textoCifrado);


// Extra => Utilizando funciones Arrow
let textoCifradoArrow = (text) => {
    let textCipher = ""
    for (let i = 0; i < text.length; i++) {
        textCipher += text.charCodeAt(i) + " ";
    }

    return textCipher;
}

console.log(textoCifradoArrow(texto));