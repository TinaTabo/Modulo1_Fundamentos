"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//-- Importar variables de prueba
//-- Developers
var testPerson_1 = require("./testPerson");
//-- Platforms
var testPlatform_1 = require("./testPlatform");
//-- Videogames
var testVideogame_1 = require("./testVideogame");
//-- Importar clases
var hobbyGame_1 = require("./hobbyGame");
//-- Pruebas
//-- Inicializar clase HobbyGame
var hobbyGame = new hobbyGame_1.HobbyGame([testVideogame_1.videogame1, testVideogame_1.videogame2]);
//-- get and set
console.log("--------------------HobbyGame------------------------");
console.log(hobbyGame.getVideogames());
console.log("----------HobbyGame-Actualizando-datos...------------");
hobbyGame.setVideogames([testVideogame_1.videogame1, testVideogame_1.videogame2, testVideogame_1.videogame3]);
console.log(hobbyGame.getVideogames());
console.log("----------HobbyGame-Datos-actualizados-OK------------");
//-- Métodos
console.log("--------------checkTotalPriceInPlatform--------------");
testVideogame_1.videogame1.setPrice(10);
console.log("Precio Total de los juegos de ".concat(testPlatform_1.platform1.getName(), ": ").concat(hobbyGame.checkTotalPriceInPlatform(testPlatform_1.platform1)));
console.log("-------------------checkTotalPrice-------------------");
testVideogame_1.videogame3.setPrice(1);
console.log("Precio Total de los juegos en HobbyGame: ".concat(hobbyGame.checkTotalPrice()));
console.log("-------------------checkLanguage---------------------");
var language1 = "Japanese";
console.log("Juegos en ".concat(language1, ": ").concat(hobbyGame.checkLanguage(language1)));
console.log("-------------------checkDeveloper--------------------");
console.log("Juegos desarrollador por ".concat(testPerson_1.persona1.getName(), ": ").concat(hobbyGame.checkDeveloper(testPerson_1.persona1)));
console.log("--------------checkPlatformInLanguages---------------");
var language2 = "Spanish";
console.log("Juegos disponibles en ".concat(testPlatform_1.platform1.getName(), " en ").concat(language2, ": ").concat(hobbyGame.checkPlatformInLanguages(testPlatform_1.platform1, language2)));
console.log("---------------------checkScore----------------------");
console.log("Juegos con una puntuaci\u00F3n mayor que 5: ".concat(hobbyGame.checkScore()));
