"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbyGame = void 0;
//-- Importar módulos
var fs_1 = require("fs");
//-- Definición de clase
var HobbyGame = /** @class */ (function () {
    //-- Constructor
    function HobbyGame(videogames) {
        this.videogames = videogames;
    }
    //-- getters y setters
    HobbyGame.prototype.getVideogames = function () {
        return this.videogames;
    };
    HobbyGame.prototype.setVideogames = function (videogames) {
        this.videogames = videogames;
    };
    HobbyGame.prototype.checkTotalPriceInPlatform = function (platform) {
        var total = 0;
        for (var i = 0; i < this.videogames.length; i++) {
            for (var j = 0; j < this.videogames[i].getPlatforms().length; j++) {
                if (platform == this.videogames[i].getPlatforms()[j]) {
                    total += this.videogames[i].getPrice();
                }
            }
        }
        return total;
    };
    HobbyGame.prototype.checkTotalPrice = function () {
        var total = 0;
        for (var i = 0; i < this.videogames.length; i++) {
            total += this.videogames[i].getPrice();
        }
        return total;
    };
    HobbyGame.prototype.checkLanguage = function (language) {
        var videoGamesInLanguage = [];
        for (var i = 0; i < this.videogames.length; i++) {
            for (var j = 0; j < this.videogames[i].getLanguages().length; j++) {
                if (language == this.videogames[i].getLanguages()[j]) {
                    videoGamesInLanguage.push(this.videogames[i]);
                }
            }
        }
        return videoGamesInLanguage;
    };
    HobbyGame.prototype.checkDeveloper = function (developer) {
        var videogamesByDeveloper = [];
        for (var i = 0; i < this.videogames.length; i++) {
            for (var j = 0; j < this.videogames[i].getDevelopers().length; j++) {
                if (developer == this.videogames[i].getDevelopers()[j]) {
                    videogamesByDeveloper.push(this.videogames[i]);
                }
            }
        }
        return videogamesByDeveloper;
    };
    HobbyGame.prototype.checkPlatformInLanguages = function (platform, language) {
        var videogamesForPlatfromInLanguages = [];
        for (var i = 0; i < this.videogames.length; i++) {
            for (var j = 0; j < this.videogames[i].getPlatforms().length; j++) {
                if (platform == this.videogames[i].getPlatforms()[j]) {
                    for (var k = 0; k < this.videogames[i].getLanguages().length; k++) {
                        if (language == this.videogames[i].getLanguages()[k]) {
                            videogamesForPlatfromInLanguages.push(this.videogames[i]);
                        }
                    }
                }
            }
        }
        return videogamesForPlatfromInLanguages;
    };
    HobbyGame.prototype.checkScore = function () {
        var videogamesScore5 = [];
        for (var i = 0; i < this.videogames.length; i++) {
            if (this.videogames[i].getScore() >= 5) {
                videogamesScore5.push(this.videogames[i]);
            }
        }
        return videogamesScore5;
    };
    HobbyGame.prototype.toJSON = function () {
        console.log("-----------Creando-Fichero-JSON--------------");
        var hobbyGameJSON = JSON.stringify(this.videogames);
        (0, fs_1.writeFileSync)("hobbyGameBBDD.json", hobbyGameJSON);
        console.log("------Fichero-JSON-Creado-Correctamente------");
    };
    HobbyGame.prototype.getInstance = function (nombreFichero) {
        nombreFichero = nombreFichero.concat(".json");
        var hobbyGameData = (0, fs_1.readFileSync)(nombreFichero);
        var hobbyGame = JSON.parse(hobbyGameData.toString());
        console.log("--------Creando-instancia-de-HobbyGame-------");
        return hobbyGame;
    };
    return HobbyGame;
}());
exports.HobbyGame = HobbyGame;
