"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.añadirProductoCategoria = exports.crearCategoria = exports.obtenerCategorias = exports.obtenerCategoria = void 0;
const categoria_schema_1 = require("../models/categoria.schema");
const obtenerCategoria = (req, res) => {
    categoria_schema_1.Categoriaschema.findById(req.params.id)
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
        res.end();
    });
};
exports.obtenerCategoria = obtenerCategoria;
const obtenerCategorias = (req, res) => {
    categoria_schema_1.Categoriaschema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
        res.end();
    });
};
exports.obtenerCategorias = obtenerCategorias;
const crearCategoria = (req, res) => {
    const { nombre, imagen, productos } = req.body;
    const nuevaCategoria = new categoria_schema_1.Categoriaschema({
        nombre,
        imagen,
        productos
    });
    nuevaCategoria.save()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.crearCategoria = crearCategoria;
const añadirProductoCategoria = (req, res) => {
    categoria_schema_1.Categoriaschema.findById(req.params.id)
        .then(categoria => {
        if (categoria) {
            categoria.productos.push(req.body.producto);
            categoria.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirProductoCategoria = añadirProductoCategoria;
