"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.default.Router();
router.get('/', usuarios_controller_1.obtenerUsuario);
router.post('/', usuarios_controller_1.crearUsuario);
router.get('/:id', usuarios_controller_1.obtenerUsuarioPorId);
router.put('/:id/carrito', usuarios_controller_1.añadirMiCarrito);
router.put('/:id/pedidos', usuarios_controller_1.añadirPedido);
router.put('/:id/lista-deseos', usuarios_controller_1.añadirMiListaDeDeseos);
exports.default = router;
