import express from 'express';
import { obtenerProducto, obtenerProductos, crearProducto } from '../controllers/productos.controller';

const router = express.Router();

router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);
router.post('/', crearProducto);

export default router;