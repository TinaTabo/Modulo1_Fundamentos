"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoGame = void 0;
//-- Definicion de clases
var VideoGame = /** @class */ (function () {
    //-- Constructor
    function VideoGame(title, releaseYear, developers, nationality, director, languages, platforms, price, score) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nationality = nationality;
        this.director = director;
        this.languages = languages;
        this.platforms = platforms;
        this.price = price;
        this.score = score;
    }
    //-- getters y setters
    VideoGame.prototype.getTitle = function () {
        return this.title;
    };
    VideoGame.prototype.setTitle = function (title) {
        this.title = title;
    };
    VideoGame.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    VideoGame.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    VideoGame.prototype.getDevelopers = function () {
        return this.developers;
    };
    VideoGame.prototype.setDevelopers = function (developers) {
        this.developers = developers;
    };
    VideoGame.prototype.getNationality = function () {
        return this.nationality;
    };
    VideoGame.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    VideoGame.prototype.getDirector = function () {
        return this.director;
    };
    VideoGame.prototype.setDirector = function (director) {
        this.director = director;
    };
    VideoGame.prototype.getLanguages = function () {
        return this.languages;
    };
    VideoGame.prototype.setLanguages = function (languages) {
        this.languages = languages;
    };
    VideoGame.prototype.getPlatforms = function () {
        return this.platforms;
    };
    VideoGame.prototype.setPlatforms = function (platform) {
        this.platforms = platform;
    };
    VideoGame.prototype.getPrice = function () {
        return this.price;
    };
    VideoGame.prototype.setPrice = function (price) {
        this.price = price;
    };
    VideoGame.prototype.getScore = function () {
        return this.score;
    };
    VideoGame.prototype.setScore = function (score) {
        this.score = score;
    };
    //-- Métodos
    VideoGame.prototype.availableInPlatform = function (platform) {
        var available = false;
        for (var i = 0; i < this.platforms.length; i++) {
            if (platform.equalPlatform(this.platforms[i])) {
                available = true;
            }
        }
        return available;
    };
    VideoGame.prototype.checkDeveloper = function (developer) {
        var developed = false;
        for (var i = 0; i < this.developers.length; i++) {
            if (developer.equalPersons(this.developers[i])) {
                developed = true;
            }
        }
        return developed;
    };
    VideoGame.prototype.checkLanguage = function (language) {
        var available = false;
        for (var i = 0; i < this.languages.length; i++) {
            if (language == this.languages[i]) {
                available = true;
            }
        }
        return available;
    };
    VideoGame.prototype.printAttributes = function () {
        for (var attr in this) {
            if (attr == "title" || attr == "releaseYear" || attr == "developers" || attr == "nationality" ||
                attr == "director" || attr == "languages" || attr == "platforms" || attr == "price" || attr == "score") {
                console.log("".concat(attr, " = ").concat(eval("this." + attr)));
            }
        }
    };
    VideoGame.prototype.toString = function () {
        var chain = "";
        for (var attr in this) {
            if (attr == "title" || attr == "releaseYear" || attr == "developers" || attr == "nationality" ||
                attr == "director" || attr == "languages" || attr == "platforms" || attr == "price" || attr == "score") {
                chain += "".concat(attr, ": ").concat(eval("this." + attr), "\n");
            }
        }
        return chain;
    };
    return VideoGame;
}());
exports.VideoGame = VideoGame;
