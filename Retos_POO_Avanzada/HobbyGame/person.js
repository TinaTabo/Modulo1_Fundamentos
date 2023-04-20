"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Profesion = void 0;
//-- Enum con los valores que puede tomar el atributo porfession.
var Profesion;
(function (Profesion) {
    Profesion["developer"] = "developer";
    Profesion["tester"] = "tester";
    Profesion["manager"] = "manager";
    Profesion["director"] = "director";
})(Profesion = exports.Profesion || (exports.Profesion = {}));
//-- Definicion de clases
var Person = /** @class */ (function () {
    //-- Constructor
    function Person(name, nationality, profession, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
    //-- getters y setters
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    Person.prototype.setExperienceYears = function (experienceYears) {
        this.experienceYears = experienceYears;
    };
    //-- Métodos
    Person.prototype.equalPersons = function (person) {
        var equalPerson = false;
        if (this.name == person.name && this.nationality == person.nationality &&
            this.profession == person.profession && this.experienceYears == person.experienceYears) {
            equalPerson = true;
        }
        return equalPerson;
    };
    Person.prototype.printAttributes = function () {
        for (var attr in this) {
            if (attr == "name" || attr == "nationality" || attr == "profession" || attr == "experienceYears") {
                console.log("".concat(attr, " = ").concat(eval("this." + attr)));
            }
        }
    };
    Person.prototype.toString = function () {
        var chain = "";
        for (var attr in this) {
            if (attr == "name" || attr == "nationality" || attr == "profession" || attr == "experienceYears") {
                chain += "".concat(attr, ": ").concat(eval("this." + attr), "\n");
            }
        }
        return chain;
    };
    return Person;
}());
exports.Person = Person;
