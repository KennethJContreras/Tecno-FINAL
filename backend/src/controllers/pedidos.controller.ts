import { Request, Response } from "express";
import { PedidosSchema } from "../models/pedido.schema";

export const obtenerPedido = (req: Request, res: Response) => {
    PedidosSchema.findOne({ email: req.params.email, contraseña: req.params.contraseña })
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const obtenerPedidos = (req: Request, res: Response) => {
    PedidosSchema.find()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const crearPedido = (req: Request, res: Response) => {
    const { ordenes, total }  = req.body;

    const nuevoPedido = new PedidosSchema({
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
        })
}