import mongoose from "mongoose";

export interface IOrden {
    producto: mongoose.Types.ObjectId;
    cantidad: number;
    subTotal: number;
}