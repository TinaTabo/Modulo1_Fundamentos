"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videogame3 = exports.videogame2 = exports.videogame1 = void 0;
var videogame_1 = require("./videogame");
//-- Importar variables de prueba
var testPerson_1 = require("./testPerson");
var testPlatform_1 = require("./testPlatform");
//-- Pruebas
//-- Definición de Videojuego 1
var developers1 = [testPerson_1.persona1, testPerson_1.persona2];
var languages1 = ["English", "Spanish", "German", "korean", "Chinese"];
var platforms1 = [testPlatform_1.platform1];
var score1 = 10;
var videogame1 = new videogame_1.VideoGame("Sims 4", 2014, developers1, "American", testPerson_1.persona3, languages1, platforms1, 0, score1);
exports.videogame1 = videogame1;
//-- Definición de Videojuego 2
var developers2 = [testPerson_1.persona3, testPerson_1.persona4, testPerson_1.persona5];
var languages2 = ["English", "Spanish", "German", "korean", "Chinese", "Japanese"];
var platforms2 = [testPlatform_1.platform1, testPlatform_1.platform2];
var score2 = 7;
var videogame2 = new videogame_1.VideoGame("BattleField", 2002, developers2, "American", testPerson_1.persona1, languages2, platforms2, 41.95, score1);
exports.videogame2 = videogame2;
//-- Definición de Videojuego 3
var videogame3 = new videogame_1.VideoGame("BattleField", 2002, developers2, "American", testPerson_1.persona1, languages2, platforms2, 41.95, score1);
exports.videogame3 = videogame3;
//-- getters y setters
console.log("--------------PRINT-ATTRIBUTES----------------");
console.log("-------videojuego-1-------");
videogame1.printAttributes();
console.log("-------videojuego-2-------");
videogame2.printAttributes();
console.log("-------videojuego-3-------");
console.log("videojuego3 tiene los mismos datos que videojuego 2, son iguales");
console.log("-------------Cambiando datos...-----------");
videogame3.setTitle("League Of Legends");
videogame3.setReleaseYear(2009);
videogame3.setDevelopers([testPerson_1.persona2, testPerson_1.persona4, testPerson_1.persona3]);
videogame3.setNationality("American");
videogame3.setDirector(testPerson_1.persona5);
videogame3.setLanguages(["English", "Spanish"]);
videogame3.setPlatforms([testPlatform_1.platform3]);
videogame3.setPrice(0);
videogame3.setScore(9);
console.log("title = ".concat(videogame3.getTitle()));
console.log("releaseYear = ".concat(videogame3.getReleaseYear()));
console.log("developers = ".concat(videogame3.getDevelopers()));
console.log("nationality = ".concat(videogame3.getNationality()));
console.log("director = ".concat(videogame3.getDirector()));
console.log("languages = ".concat(videogame3.getLanguages()));
console.log("platforms = ".concat(videogame3.getPlatforms()));
console.log("price = ".concat(videogame3.getPrice()));
console.log("score = ".concat(videogame3.getScore()));
console.log("-------------------TO-STRING------------------");
console.log("-------videojuego-1-------");
console.log(videogame1.toString());
console.log("-------videojuego-2-------");
console.log(videogame2.toString());
console.log("-------videojuego-3-------");
console.log(videogame3.toString());
console.log("------------------------------------------------");
//-- Comprobar si un juego ha salido para una x plataforma
console.log("El juego ".concat(videogame1.getTitle(), " esta disponible en ").concat(testPlatform_1.platform1.getName(), "?: ").concat(videogame1.availableInPlatform(testPlatform_1.platform1)));
console.log("El juego ".concat(videogame1.getTitle(), " esta disponible en ").concat(testPlatform_1.platform2.getName(), "?: ").concat(videogame1.availableInPlatform(testPlatform_1.platform2)));
console.log("------------------------------------------------");
//-- Comprobar desarrollador
console.log("El juego ".concat(videogame1.getTitle(), " ha sido desarrollado por ").concat(testPerson_1.persona1.getName(), "?: ").concat(videogame1.checkDeveloper(testPerson_1.persona1)));
console.log("El juego ".concat(videogame2.getTitle(), " ha sido desarrollado por ").concat(testPerson_1.persona3.getName(), "?: ").concat(videogame2.checkDeveloper(testPerson_1.persona3)));
console.log("El juego ".concat(videogame3.getTitle(), " ha sido desarrollado por ").concat(testPerson_1.persona5.getName(), "?: ").concat(videogame3.checkDeveloper(testPerson_1.persona5)));
console.log("------------------------------------------------");
//-- Comprobar lenguage
var checklanguage = "korean";
console.log("El juego ".concat(videogame1.getTitle(), " est\u00E1 disponible en ").concat(checklanguage, "?: ").concat(videogame1.checkLanguage(checklanguage)));
console.log("El juego ".concat(videogame2.getTitle(), " est\u00E1 disponible en ").concat(checklanguage, "?: ").concat(videogame2.checkLanguage(checklanguage)));
console.log("El juego ".concat(videogame3.getTitle(), " est\u00E1 disponible en ").concat(checklanguage, "?: ").concat(videogame3.checkLanguage(checklanguage)));
console.log("------------------------------------------------");
