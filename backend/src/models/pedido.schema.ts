import mongoose, { Schema } from "mongoose";
import { IPedido } from "./pedido.model";

const PedidoSchema = new mongoose.Schema({
    ordenes: [{ type: Schema.Types.ObjectId, ref: 'productos' }],
    total: { type: Number, required: true },
    status: { type: String, enum: ["en-proceso", "procesada", "pendiente"], default: "pendiente", required: true }
  });    
  
export const PedidosSchema = mongoose.model('pedidos', PedidoSchema);