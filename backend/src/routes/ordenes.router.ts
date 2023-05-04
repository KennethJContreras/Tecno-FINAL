import express from 'express';
import { obtenerOrden, obtenerOrdenes, crearOrden } from '../controllers/ordenes.controller';

const router = express.Router();

router.get('/', obtenerOrdenes);
router.get('/:id', obtenerOrden);
router.post('/', crearOrden);

export default router;