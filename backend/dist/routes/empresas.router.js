"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresas_controller_1 = require("../src/controllers/empresas.controller");
const router = express_1.default.Router();
router.get('/', empresas_controller_1.obtenerEmpresas);
router.get('/:id', empresas_controller_1.obtenerEmpresa);
router.post('/', empresas_controller_1.crearEmpresa);
router.put('/:id', empresas_controller_1.añadirProductoEmpresa);
exports.default = router;
