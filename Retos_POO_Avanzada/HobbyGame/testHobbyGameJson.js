"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//-- Importar clases
var hobbyGame_1 = require("./hobbyGame");
//-- Importar variables de prueba
var testVideogame_1 = require("./testVideogame");
//-- Pruebas
//-- Inicializar clase HobbyGame
var hobbyGame = new hobbyGame_1.HobbyGame([testVideogame_1.videogame1, testVideogame_1.videogame2, testVideogame_1.videogame3]);
console.log("----------------------toJSON-------------------------");
hobbyGame.toJSON();
console.log("---------------------getInstance---------------------");
var hobbyGame2 = hobbyGame.getInstance("hobbyGameBBDD_2");
console.log(hobbyGame2);
