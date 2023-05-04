"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearUsuario = exports.obtenerUsuarios = exports.obtenerUsuario = void 0;
const usuario_schema_1 = require("../models/usuario.schema");
const obtenerUsuario = (req, res) => {
    usuario_schema_1.Usuarioschema.findOne({ email: req.body.email, contraseña: req.body.contraseña })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerUsuario = obtenerUsuario;
const obtenerUsuarios = (req, res) => {
    usuario_schema_1.Usuarioschema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
const crearUsuario = (req, res) => {
    const { primerNombre, PrimerAppelido, contraseña, email, direccion, telefono, tarjetaDeCredito } = req.body;
    const nuevoUsuario = new usuario_schema_1.Usuarioschema({
        primerNombre,
        PrimerAppelido,
        email,
        contraseña,
        direccion,
        telefono,
        tarjetaDeCredito
    });
    nuevoUsuario.save()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.crearUsuario = crearUsuario;
