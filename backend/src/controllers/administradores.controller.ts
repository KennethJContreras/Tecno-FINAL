import { Request, Response } from "express";
import { AdministradorSchema } from "../models/administrador.schema";

export const obtenerAdministrador = (req: Request, res: Response) => {
    AdministradorSchema.findById(req.params.id)
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
            res.end();
        })
}

export const obtenerAdministradores = (req: Request, res: Response) => {
    AdministradorSchema.find()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
            res.end();
        })
}

