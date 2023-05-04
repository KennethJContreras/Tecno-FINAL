import mongoose from "mongoose";
import { IProducto } from "./producto.model";

export interface Usuario {
    primerNombre: string;
    PrimerAppelido: string;
    email: string;
    contraseña: string;
    direccion: string;
    telefono: string;
    tarjetaDeCredito: string;
    ordenes: Array<mongoose.Types.ObjectId>,
    miListaDeseos: Array<mongoose.Types.ObjectId>;
    miCarrito: Array<{idProducto: mongoose.Types.ObjectId, unidades: number}>;
    pedidos: Array<mongoose.Types.ObjectId>
}