"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.añadirProductoEmpresa = exports.crearEmpresa = exports.obtenerEmpresas = exports.obtenerEmpresa = void 0;
const empresa_schema_1 = require("../models/empresa.schema");
const obtenerEmpresa = (req, res) => {
    empresa_schema_1.Empresaschema.findById(req.params.id)
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
        res.end();
    });
};
exports.obtenerEmpresa = obtenerEmpresa;
const obtenerEmpresas = (req, res) => {
    empresa_schema_1.Empresaschema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
        res.end();
    });
};
exports.obtenerEmpresas = obtenerEmpresas;
const crearEmpresa = (req, res) => {
    const { nombre, logo, descripcion, productos } = req.body;
    const nuevaEmpresa = new empresa_schema_1.Empresaschema({
        nombre,
        logo,
        descripcion,
        productos
    });
    nuevaEmpresa.save()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.crearEmpresa = crearEmpresa;
const añadirProductoEmpresa = (req, res) => {
    empresa_schema_1.Empresaschema.findById(req.params.id)
        .then(empresa => {
        if (empresa) {
            empresa.productos.push(req.body.producto);
            empresa.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirProductoEmpresa = añadirProductoEmpresa;
