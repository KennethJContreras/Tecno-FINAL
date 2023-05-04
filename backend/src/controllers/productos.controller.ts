import { Request, Response } from "express";
import { ProductosSchema } from "../models/producto.schema";

export const obtenerProducto = (req: Request, res: Response) => {
    ProductosSchema.findOne({ email: req.params.email, contraseña: req.params.contraseña })
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const obtenerProductos = (req: Request, res: Response) => {
    ProductosSchema.find()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const crearProducto = (req: Request, res: Response) => {
    const { nombre, descripcion, imagen, precio, subCategorias } = req.body;

    const nuevoProducto = new ProductosSchema({
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
            res.send(resultado);
        })
}
