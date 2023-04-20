"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = exports.StorageDevice = void 0;
//-- Enum con los valores que puede tomar el atributo storageDevice.
var StorageDevice;
(function (StorageDevice) {
    StorageDevice["cartridge"] = "cartridge";
    StorageDevice["card"] = "card";
    StorageDevice["cd"] = "cd";
    StorageDevice["dvd"] = "dvd";
    StorageDevice["bluray"] = "bluray";
})(StorageDevice = exports.StorageDevice || (exports.StorageDevice = {}));
//-- Definición de clases
var Platform = /** @class */ (function () {
    //-- Constructor
    function Platform(name, releaseYear, company, nBits, generation, hasHD, hDSize, hasInterntConexion, storageDevice, color) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hDSize = hDSize;
        this.hasInterntConexion = hasInterntConexion;
        this.storageDevide = storageDevice;
        this.color = color;
    }
    //-- getters y setters
    Platform.prototype.getName = function () {
        return this.name;
    };
    Platform.prototype.setName = function (name) {
        this.name = name;
    };
    Platform.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Platform.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Platform.prototype.getCompany = function () {
        return this.company;
    };
    Platform.prototype.setCompany = function (company) {
        this.company = company;
    };
    Platform.prototype.getNBits = function () {
        return this.nBits;
    };
    Platform.prototype.setNBits = function (nBits) {
        this.nBits = nBits;
    };
    Platform.prototype.getGeneration = function () {
        return this.generation;
    };
    Platform.prototype.setGeneration = function (generation) {
        this.generation = generation;
    };
    Platform.prototype.getHasHD = function () {
        return this.hasHD;
    };
    Platform.prototype.setHasHD = function (hasHD) {
        this.hasHD = hasHD;
    };
    Platform.prototype.getHDSize = function () {
        return this.hDSize;
    };
    Platform.prototype.setHDSize = function (hDSize) {
        this.hDSize = hDSize;
    };
    Platform.prototype.getHasInterntConexion = function () {
        return this.hasInterntConexion;
    };
    Platform.prototype.setHasInterntConexion = function (hasInterntConexion) {
        this.hasInterntConexion = hasInterntConexion;
    };
    Platform.prototype.getStorageDevice = function () {
        return this.storageDevide;
    };
    Platform.prototype.setStorageDevice = function (storageDevice) {
        this.storageDevide = storageDevice;
    };
    Platform.prototype.getColor = function () {
        return this.color;
    };
    Platform.prototype.setColor = function (color) {
        this.color = color;
    };
    //-- Métodos
    Platform.prototype.equalPlatform = function (platform) {
        var equalPlatform = false;
        if (this.name == platform.name && this.releaseYear == platform.releaseYear && this.company == platform.company
            && this.nBits == platform.nBits && this.generation == platform.generation && this.hasHD == platform.hasHD
            && this.hDSize == platform.hDSize && this.hasInterntConexion == platform.hasInterntConexion
            && this.storageDevide == platform.storageDevide && this.color == platform.color) {
            equalPlatform = true;
        }
        return equalPlatform;
    };
    Platform.prototype.printAttributes = function () {
        for (var attr in this) {
            if (attr == "name" || attr == "releaseYear" || attr == "company" || attr == "nBits" || attr == "generation" ||
                attr == "hasHD" || attr == "hDSize" || attr == "hasInterntConexion" || attr == "storageDevice" || attr == "color") {
                console.log("".concat(attr, " = ").concat(eval("this." + attr)));
            }
        }
    };
    Platform.prototype.toString = function () {
        var chain = "";
        for (var attr in this) {
            if (attr == "name" || attr == "releaseYear" || attr == "company" || attr == "nBits" || attr == "generation" ||
                attr == "hasHD" || attr == "hDSize" || attr == "hasInterntConexion" || attr == "storageDevice" || attr == "color") {
                chain += "".concat(attr, ": ").concat(eval("this." + attr), "\n");
            }
        }
        return chain;
    };
    return Platform;
}());
exports.Platform = Platform;
