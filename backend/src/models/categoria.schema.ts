import mongoose, { Schema } from "mongoose";
import { Categoria } from "./categoria.model";

const schema = new Schema<Categoria> ({
    nombre: String,
    imagen: String,
    productos: Array<Schema.Types.ObjectId>
});

export const Categoriaschema = mongoose.model('categorias', schema);