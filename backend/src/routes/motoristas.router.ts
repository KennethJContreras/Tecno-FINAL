import express from 'express';
import { obtenerMotorista, obtenerMotoristas, crearMotorista, añadirPedido } from '../controllers/motoristas.controller';

const router = express.Router();

router.get('/', obtenerMotorista);
router.post('/', crearMotorista);
router.put('/:id/pedidos', añadirPedido);

export default router;