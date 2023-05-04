"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categorias_controller_1 = require("../src/controllers/categorias.controller");
const router = express_1.default.Router();
router.get('/', categorias_controller_1.obtenerCategorias);
router.get('/:id', categorias_controller_1.obtenerCategoria);
router.post('/', categorias_controller_1.crearCategoria);
router.put('/:id', categorias_controller_1.añadirProductoCategoria);
exports.default = router;
