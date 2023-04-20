//-- Función para saber el signo zodiacal dada una fecha de nacimiento.
function zodiac(day:number, month:number){
    if ((day>=21 && month == 3)||(day<=19 && month == 4)) {
        return "Aries";
    }
    if ((day>=20 && month == 4)||(day<=20 && month == 5)) {
        return "Taurus";
    }
    if ((day>=21 && month == 5)||(day<=20 && month == 6)) {
        return "Gemini";
    }
    if ((day>=21 && month == 6)||(day<=22 && month == 7)) {
        return "Cancer";
    }
    if ((day>=23 && month == 7)||(day<=22 && month == 8)) {
        return "Leo";
    }
    if ((day>=23 && month == 8)||(day<=22 && month == 9)) {
        return "Virgo";
    }
    if ((day>=23 && month == 9)||(day<=22 && month == 10)) {
        return "Libra";
    }
    if ((day>=23 && month == 10)||(day<=21 && month == 11)) {
        return "Scorpio";
    }
    if ((day>=22 && month == 11)||(day<=21 && month == 12)) {
        return "Sagittarius";
    }
    if ((day>=22 && month == 12)||(day<=19 && month == 1)) {
        return "Capricorn";
    }
    if ((day>=20 && month == 1)||(day<=18 && month == 2)) {
        return "Aquarius";
    }
    if ((day>=19 && month == 2)||(day<=20 && month == 3)) {
        return "Pisces";
    }
}

//-- Función que pasandole un país te indica el continente donde se encuentra.
function continent(country:string) {
    if (country == "Spain" || country == "Germany" || country == "Italy" ||
        country == "Portugal" || country == "Malta") {
        console.log(`${country} is in Europe.`);
    }
    if (country == "Argentina" || country == "Brazil" || country == "Mexico" ||
        country == "United States" || country == "Chile") {
        console.log(`${country} is in America.`);
    }
    if (country == "Cameroon" || country == "Egypt" || country == "Kenya" ||
        country == "Morocco" || country == "Etiopia") {
        console.log(`${country} is in Africa.`);
    }
    if (country == "Japan" || country == "South Korea" || country == "Philippines" ||
        country == "Thailand" || country == "Qatar") {
        console.log(`${country} is in Asia.`);
    }
    if (country == "Australia" || country == "Kiribati" || country == "Solomon Islands" ||
        country == "Vanuatu") {
        console.log(`${country} is in Oceania.`);
    }
}

//-- Función que indica si un numero es par o impar.
function isEven(number:number) {
    if (number % 2 == 0) {
        console.log(`El numero ${number} es par`);
    }else{
        console.log(`El numero ${number} es impar`);
    }
}

//-- Exportar funcion isEven
export {isEven};

//-- Pruebas
let dia:number = 5;
let mes:number = 1;
console.log(`Tu signo zodiacal es: ${zodiac(dia,mes)}`);

let pais1:string = "Spain";
continent(pais1);
let pais2:string = "Mexico";
continent(pais2);
let pais3:string = "Egypt";
continent(pais3);
let pais4:string = "South Korea";
continent(pais4);
let pais5:string = "Solomon Islands";
continent(pais5);

let numero1:number = 253;
let numero2:number = 14;
isEven(numero1);
isEven(numero2);