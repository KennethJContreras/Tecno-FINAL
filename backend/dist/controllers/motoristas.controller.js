"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearMotorista = exports.obtenerMotoristas = exports.obtenerMotorista = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
const obtenerMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.findOne({ email: req.params.email, contraseña: req.params.contraseña })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerMotorista = obtenerMotorista;
const obtenerMotoristas = (req, res) => {
    motorista_schema_1.MotoristaSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerMotoristas = obtenerMotoristas;
const crearMotorista = (req, res) => {
    const { primerNombre, PrimerAppelido, contraseña, email, añosDeExperiencia } = req.body;
    const nuevoMotorista = new motorista_schema_1.MotoristaSchema({
        primerNombre,
        PrimerAppelido,
        email,
        contraseña,
        añosDeExperiencia
    });
    nuevoMotorista.save()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.crearMotorista = crearMotorista;
