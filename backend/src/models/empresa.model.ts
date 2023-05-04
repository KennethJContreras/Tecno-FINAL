import mongoose from "mongoose";

export interface IEmpresa {
    nombre: string;
    descripcion: string;
    imagen: string;
    productos: Array<mongoose.Types.ObjectId>;
}