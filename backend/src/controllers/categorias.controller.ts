import { Request, Response } from "express";
import { Categoriaschema } from "../models/categoria.schema";

export const obtenerCategoria = (req: Request, res: Response) => {
    Categoriaschema.findById(req.params.id)
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
            res.end();
        })
}

export const obtenerCategorias = (req: Request, res: Response) => {
    Categoriaschema.find()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
            res.end();
        })
}

export const crearCategoria = (req: Request, res: Response) => {
    const { nombre, imagen, productos } = req.body;

    const nuevaCategoria = new Categoriaschema({
        nombre,
        imagen,
        productos
    });

    nuevaCategoria.save()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const añadirProductoCategoria = (req: Request, res: Response) => {
    Categoriaschema.findById(req.params.id)
        .then(categoria => {
            if (categoria) {
                categoria.productos.push(req.body.producto);
                categoria.save()
                    .then(result => res.send(result))
                    .catch(error => console.log(error));
            }
        })
        .catch(error => console.log(error));
}