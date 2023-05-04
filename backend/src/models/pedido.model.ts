import mongoose from "mongoose";

type Status = "en-proceso" | "procesada" | "pendiente";

export interface IPedido {
    ordenes: Array<mongoose.Types.ObjectId>;
    total: number;
    status: Status
}
