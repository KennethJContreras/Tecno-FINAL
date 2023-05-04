import express from 'express';
import { obtenerPedido, obtenerPedidos, crearPedido } from '../controllers/pedidos.controller';

const router = express.Router();

router.get('/', obtenerPedidos);
router.get('/:id', obtenerPedido);
router.post('/', crearPedido);

export default router;