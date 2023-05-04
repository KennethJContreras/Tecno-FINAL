"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerAdministradores = exports.obtenerAdministrador = void 0;
const administrador_schema_1 = require("../models/administrador.schema");
const obtenerAdministrador = (req, res) => {
    administrador_schema_1.AdministradorSchema.findById(req.params.id)
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
        res.end();
    });
};
exports.obtenerAdministrador = obtenerAdministrador;
const obtenerAdministradores = (req, res) => {
    administrador_schema_1.AdministradorSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
        res.end();
    });
};
exports.obtenerAdministradores = obtenerAdministradores;
