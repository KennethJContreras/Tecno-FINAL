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
    miListaDeseos: Array<mongoose.Types.ObjectId>;
    miCarrito: Array<mongoose.Types.ObjectId>;
    pedidos: Array<mongoose.Types.ObjectId>
}