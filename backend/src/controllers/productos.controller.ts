import { Request, Response } from "express";
import { ProductosSchema } from "../models/producto.schema";

export const obtenerProducto = (req: Request, res: Response) => {
    ProductosSchema.findById(req.params.id)
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            console.log(resultado);
        })
}

export const obtenerProductosCategoria = (req: Request, res: Response) => {
    ProductosSchema.find({ categoria: req.params.idCategoria })
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            console.log(resultado);
        })
}

export const obtenerProductoPorCategoriaEmpresa = (req: Request, res: Response) => {
    ProductosSchema.find({ categoria: req.params.idCategoria, empresa: req.params.idEmpresa})
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            console.log(resultado);
        })
}

export const obtenerProductos = (req: Request, res: Response) => {
    ProductosSchema.find()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            console.log(resultado);
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
            console.log(resultado);
        })
}
