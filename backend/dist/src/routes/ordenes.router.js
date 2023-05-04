"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordenes_controller_1 = require("../controllers/ordenes.controller");
const router = express_1.default.Router();
router.get('/', ordenes_controller_1.obtenerOrdenes);
router.get('/:id', ordenes_controller_1.obtenerOrden);
router.post('/', ordenes_controller_1.crearOrden);
exports.default = router;
