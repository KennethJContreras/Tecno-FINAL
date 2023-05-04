"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default.connect('mongodb+srv://admin:1234@cluster1.evhe63b.mongodb.net/tecnoshop')
            .then(respuesta => {
            console.log("Se conectó a la base de datos: tecnoshop");
        })
            .catch(respuesta => {
            console.log("Error al conectarse a tecnoshop BD");
        });
    }
}
exports.Database = Database;
