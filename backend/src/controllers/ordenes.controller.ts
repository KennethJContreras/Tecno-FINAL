import { Request, Response } from "express";
import { OrdenesSchema } from "../models/orden.schema";

export const obtenerOrden = (req: Request, res: Response) => {
    OrdenesSchema.findById(req.params.id)
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const obtenerOrdenes = (req: Request, res: Response) => {
    OrdenesSchema.find()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const crearOrden = (req: Request, res: Response) => {
    const { producto, cantidad, subTotal} = req.body;

    const nuevaOrden = new OrdenesSchema({
        producto,
        cantidad,
        subTotal,
    });

    nuevaOrden.save()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}