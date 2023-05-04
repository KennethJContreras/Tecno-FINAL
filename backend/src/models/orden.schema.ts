import mongoose, { Schema } from "mongoose";
import { IOrden } from "./orden.model";

const schema = new Schema<IOrden> ({
    producto: Schema.Types.ObjectId,
    cantidad: Number,
    subTotal: Number
});

export const OrdenesSchema = mongoose.model('ordenes', schema);