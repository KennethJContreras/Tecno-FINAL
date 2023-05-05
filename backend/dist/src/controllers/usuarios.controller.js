"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.añadirOrden = exports.añadirPedido = exports.eliminarProductoListaDeseos = exports.eliminarProductoCarrito = exports.añadirMiCarrito = exports.añadirMiListaDeDeseos = exports.crearUsuario = exports.obtenerUsuarios = exports.obtenerUsuarioPorId = exports.obtenerUsuario = void 0;
const usuario_schema_1 = require("../models/usuario.schema");
const obtenerUsuario = (req, res) => {
    usuario_schema_1.Usuarioschema.findOne({ email: req.query.email, contraseña: req.query.contrasenia })
        .then(resultado => {
        console.log(resultado);
        res.send(resultado);
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerUsuario = obtenerUsuario;
const obtenerUsuarioPorId = (req, res) => {
    usuario_schema_1.Usuarioschema.findById(req.params.id)
        .then(resultado => {
        console.log(resultado);
        res.send(resultado);
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerUsuarioPorId = obtenerUsuarioPorId;
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
        console.log(resultado);
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.crearUsuario = crearUsuario;
const añadirMiListaDeDeseos = (req, res) => {
    usuario_schema_1.Usuarioschema.findById(req.params.id)
        .then(usuario => {
        if (usuario) {
            usuario.miListaDeseos.push(req.body.idProducto);
            usuario.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirMiListaDeDeseos = añadirMiListaDeDeseos;
const añadirMiCarrito = (req, res) => {
    usuario_schema_1.Usuarioschema.findById(req.params.id)
        .then(usuario => {
        if (usuario) {
            usuario.miCarrito.push({ idProducto: req.body.idProducto, unidades: req.body.unidades });
            usuario.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirMiCarrito = añadirMiCarrito;
const eliminarProductoCarrito = (req, res) => {
    usuario_schema_1.Usuarioschema.findById(req.params.id)
        .then(usuario => {
        if (usuario) {
            usuario.miCarrito.forEach(carrito => {
                const index = usuario.miCarrito.findIndex(producto => producto.idProducto === req.body.idProducto);
                if (index !== -1) {
                    usuario.miCarrito.splice(index, 1);
                }
            });
            usuario.save()
                .then(result => { res.send(result); console.log("exito"); })
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.eliminarProductoCarrito = eliminarProductoCarrito;
const eliminarProductoListaDeseos = (req, res) => {
    usuario_schema_1.Usuarioschema.findById(req.params.id)
        .then(usuario => {
        if (usuario) {
            const index = usuario.miListaDeseos.findIndex(producto => producto === req.body.idProducto);
            if (index !== -1) {
                usuario.miListaDeseos.splice(index, 1);
            }
            usuario.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.eliminarProductoListaDeseos = eliminarProductoListaDeseos;
const añadirPedido = (req, res) => {
    usuario_schema_1.Usuarioschema.findById(req.params.id)
        .then(usuario => {
        if (usuario) {
            usuario.pedidos.push(req.body.idPedido);
            usuario.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirPedido = añadirPedido;
const añadirOrden = (req, res) => {
    usuario_schema_1.Usuarioschema.findById(req.params.id)
        .then(usuario => {
        if (usuario) {
            usuario.ordenes.push(req.body.idOrden);
            usuario.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirOrden = añadirOrden;
