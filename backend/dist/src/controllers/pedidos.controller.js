"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearPedido = exports.obtenerPedidos = exports.obtenerPedido = void 0;
const pedido_schema_1 = require("../models/pedido.schema");
const obtenerPedido = (req, res) => {
    pedido_schema_1.PedidosSchema.findOne({ email: req.params.email, contraseña: req.params.contraseña })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerPedido = obtenerPedido;
const obtenerPedidos = (req, res) => {
    pedido_schema_1.PedidosSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerPedidos = obtenerPedidos;
const crearPedido = (req, res) => {
    const { ordenes, total } = req.body;
    const nuevoPedido = new pedido_schema_1.PedidosSchema({
        ordenes,
        total
    });
    nuevoPedido.save()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.crearPedido = crearPedido;
