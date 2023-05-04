"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearProducto = exports.obtenerProductos = exports.obtenerProductoPorCategoriaEmpresa = exports.obtenerProductosCategoria = exports.obtenerProducto = void 0;
const producto_schema_1 = require("../models/producto.schema");
const obtenerProducto = (req, res) => {
    producto_schema_1.ProductosSchema.findById(req.params.id)
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        console.log(resultado);
    });
};
exports.obtenerProducto = obtenerProducto;
const obtenerProductosCategoria = (req, res) => {
    producto_schema_1.ProductosSchema.find({ categoria: req.params.idCategoria })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        console.log(resultado);
    });
};
exports.obtenerProductosCategoria = obtenerProductosCategoria;
const obtenerProductoPorCategoriaEmpresa = (req, res) => {
    producto_schema_1.ProductosSchema.find({ categoria: req.params.idCategoria, empresa: req.params.idEmpresa })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        console.log(resultado);
    });
};
exports.obtenerProductoPorCategoriaEmpresa = obtenerProductoPorCategoriaEmpresa;
const obtenerProductos = (req, res) => {
    producto_schema_1.ProductosSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        console.log(resultado);
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
        console.log(resultado);
    });
};
exports.crearProducto = crearProducto;
