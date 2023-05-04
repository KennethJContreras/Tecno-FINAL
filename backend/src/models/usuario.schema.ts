import mongoose, { Schema } from "mongoose";
import { Usuario } from "./usuario.model";

const schema = new Schema<Usuario>({
    primerNombre: String,
    PrimerAppelido: String,
    email: String,
    contraseña: String,
    direccion: String,
    telefono: String,
    tarjetaDeCredito: String,
    ordenes: Array<Schema.Types.ObjectId>,
    miListaDeseos: Array<Schema.Types.ObjectId>,
    miCarrito: Array<{idProducto: Schema.Types.ObjectId, unidades: Number}>,
    pedidos: Array<Schema.Types.ObjectId>
})

export const Usuarioschema = mongoose.model('usuarios', schema);