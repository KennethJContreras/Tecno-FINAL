import { Request, Response } from "express";
import { OrdenesSchema } from "../models/orden.schema";

export const obtenerOrden = (req: Request, res: Response) => {
    OrdenesSchema.findOne({ email: req.params.email, contraseña: req.params.contraseña })
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
    const { nombre, apellido, contraseña, email, telefono } = req.body;

    const nuevaOrden = new OrdenesSchema({
        nombre,
        apellido,
        email,
        contraseña,
        telefono
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