"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_controller_1 = require("../controllers/productos.controller");
const router = express_1.default.Router();
router.get('/', productos_controller_1.obtenerProductos);
router.get('/:id', productos_controller_1.obtenerProducto);
router.get('/categoria/:idCategoria', productos_controller_1.obtenerProductosCategoria);
router.get('/:idCategoria/:idEmpresa', productos_controller_1.obtenerProductoPorCategoriaEmpresa);
router.post('/', productos_controller_1.crearProducto);
exports.default = router;
