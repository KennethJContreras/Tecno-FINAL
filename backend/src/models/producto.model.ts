import mongoose from "mongoose";

type subCategoria = "hogar" | "diversion" | "educacion";

export interface IProducto {
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
    categoria: mongoose.Types.ObjectId;
    empresa: mongoose.Types.ObjectId;
    subCategorias: subCategoria;
}

