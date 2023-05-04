import mongoose from "mongoose";

export interface Categoria {
    nombre: String;
    imagen: String;
    productos: Array<mongoose.Types.ObjectId>;
}