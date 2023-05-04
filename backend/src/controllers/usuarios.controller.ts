import { Request, Response } from "express";
import { Usuarioschema } from "../models/usuario.schema";

export const obtenerUsuario = (req: Request, res: Response) => {
    Usuarioschema.findOne({ email: req.query.email, contraseña: req.query.contrasenia })
        .then(resultado => {
            console.log(resultado);
            res.send(resultado);
        })
        .catch(resultado => {
            res.send(resultado);
        });
}

export const obtenerUsuarioPorId = (req: Request, res: Response) => {
    Usuarioschema.findById(req.params.id)
        .then(resultado => {
            console.log(resultado);
            res.send(resultado);
        })
        .catch(resultado => {
            res.send(resultado);
        });
}

export const obtenerUsuarios = (req: Request, res: Response) => {
    Usuarioschema.find()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const crearUsuario = (req: Request, res: Response) => {
    const { primerNombre, PrimerAppelido, contraseña, email, direccion, telefono, tarjetaDeCredito } = req.body;

    const nuevoUsuario = new Usuarioschema({
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
        })
}

export const añadirMiListaDeDeseos = (req: Request, res: Response) => {
    Usuarioschema.findById(req.params.id)
        .then(usuario => {
            if (usuario) {
                usuario.miListaDeseos.push(req.body.idProducto);
                usuario.save()
                    .then(result => res.send(result))
                    .catch(error => console.log(error));
            }
        })
        .catch(error => console.log(error));
}

export const añadirMiCarrito = (req: Request, res: Response) => { 
    Usuarioschema.findById(req.params.id)
    .then(usuario => {
        if (usuario) {
            usuario.miCarrito.push(req.body.idProducto);
            usuario.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
    .catch(error => console.log(error));
}

export const añadirPedido = (req: Request, res: Response) => {
    Usuarioschema.findById(req.params.id)
    .then(usuario => {
        if (usuario) {
            usuario.pedidos.push(req.body.idPedido);
            usuario.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
    .catch(error => console.log(error));
}
