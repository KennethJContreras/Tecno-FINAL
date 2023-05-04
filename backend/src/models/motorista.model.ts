import mongoose from "mongoose";

export interface IMotorista {
    primerNombre: string;
    primerApellido: string;
    email: string;
    contraseña: String,
    telefono: string;
    añosDeExperiencia: Number,
    pedidosEntregados: Array<mongoose.Types.ObjectId>
}