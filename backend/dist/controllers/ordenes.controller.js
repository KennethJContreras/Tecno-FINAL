"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearOrden = exports.obtenerOrdenes = exports.obtenerOrden = void 0;
const orden_schema_1 = require("../models/orden.schema");
const obtenerOrden = (req, res) => {
    orden_schema_1.OrdenesSchema.findOne({ email: req.params.email, contraseña: req.params.contraseña })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerOrden = obtenerOrden;
const obtenerOrdenes = (req, res) => {
    orden_schema_1.OrdenesSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerOrdenes = obtenerOrdenes;
const crearOrden = (req, res) => {
    const { nombre, apellido, contraseña, email, telefono } = req.body;
    const nuevaOrden = new orden_schema_1.OrdenesSchema({
        nombre,
        apellido,
        email,
        contraseña,
        telefono
    });
    nuevaOrden.save()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.crearOrden = crearOrden;
