"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.añadirPedido = exports.crearMotorista = exports.obtenerMotoristas = exports.obtenerMotorista = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
const obtenerMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.findOne({ email: req.query.email, contraseña: req.query.contraseña })
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
    const { primerNombre, primerApellido, contraseña, email, añosDeExperiencia, telefono } = req.body;
    const nuevoMotorista = new motorista_schema_1.MotoristaSchema({
        primerNombre,
        primerApellido,
        email,
        contraseña,
        añosDeExperiencia,
        telefono
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
const añadirPedido = (req, res) => {
    motorista_schema_1.MotoristaSchema.findById(req.params.id)
        .then(motorista => {
        if (motorista) {
            motorista.pedidosEntregados.push(req.body.id);
            motorista.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirPedido = añadirPedido;
