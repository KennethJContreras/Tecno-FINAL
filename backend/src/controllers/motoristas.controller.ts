import { Request, Response } from "express";
import { MotoristaSchema } from "../models/motorista.schema";

export const obtenerMotorista = (req:Request, res:Response) => {
    MotoristaSchema.findOne({email: req.query.email, contraseña: req.query.contraseña})
    .then(resultado => {
        res.send(resultado);
        res.end();
    })
    .catch(resultado => {
        res.send(resultado);
    })
}

export const obtenerMotoristas = (req:Request, res:Response) => {
    MotoristaSchema.find()
    .then(resultado => {
        res.send(resultado);
        res.end();
    })
    .catch(resultado => {
        res.send(resultado);
    })
}

export const crearMotorista = (req: Request, res: Response) => {
    const { primerNombre, primerApellido, contraseña, email, añosDeExperiencia, telefono} = req.body;

    const nuevoMotorista = new MotoristaSchema({
        primerNombre,
        primerApellido,
        email,
        contraseña,
        añosDeExperiencia,
        telefono
    });

    nuevoMotorista.save()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const añadirPedido = (req: Request, res: Response) => {
    MotoristaSchema.findById(req.params.id)
    .then(motorista => {
        if (motorista) {
            motorista.pedidosEntregados.push(req.body.id);
            motorista.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
    .catch(error => console.log(error));
}