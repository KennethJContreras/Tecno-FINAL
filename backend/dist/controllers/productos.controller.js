"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearProducto = exports.obtenerProductos = exports.obtenerProducto = void 0;
const producto_schema_1 = require("../models/producto.schema");
const obtenerProducto = (req, res) => {
    producto_schema_1.ProductosSchema.findOne({ email: req.params.email, contraseña: req.params.contraseña })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerProducto = obtenerProducto;
const obtenerProductos = (req, res) => {
    producto_schema_1.ProductosSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerProductos = obtenerProductos;
const crearProducto = (req, res) => {
    const { nombre, descripcion, imagen, precio, subCategorias } = req.body;
    const nuevoProducto = new producto_schema_1.ProductosSchema({
        nombre,
        descripcion,
        imagen,
        precio,
        subCategorias
    });
    nuevoProducto.save()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.crearProducto = crearProducto;
