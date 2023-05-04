import express from 'express';
import { obtenerUsuario, obtenerUsuarios, crearUsuario, añadirMiCarrito, añadirMiListaDeDeseos, añadirPedido, obtenerUsuarioPorId } from '../controllers/usuarios.controller';

const router = express.Router();

router.get('/', obtenerUsuario);
router.get('/:id', obtenerUsuarioPorId);
router.post('/', crearUsuario);
router.put('/:id/carrito', añadirMiCarrito);
router.put('/:id/lista-deseos', añadirMiListaDeDeseos);
router.put('/:id/pedidos', añadirPedido);

export default router;