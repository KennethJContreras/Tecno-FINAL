import mongoose, { Schema } from "mongoose";
import { IAdministrador } from "./administrador.model";

const schema = new Schema<IAdministrador> ({
    nombre: String,
})

export const AdministradorSchema = mongoose.model('administradores', schema);