"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pedidos_controller_1 = require("../src/controllers/pedidos.controller");
const router = express_1.default.Router();
router.get('/', pedidos_controller_1.obtenerPedidos);
router.get('/:id', pedidos_controller_1.obtenerPedido);
router.post('/', pedidos_controller_1.crearPedido);
exports.default = router;
