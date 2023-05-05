import express from 'express';
import { obtenerUsuario, obtenerUsuarios, crearUsuario, añadirMiCarrito, añadirMiListaDeDeseos, añadirPedido, obtenerUsuarioPorId, eliminarProductoCarrito, eliminarProductoListaDeseos, añadirOrden } from '../controllers/usuarios.controller';

const router = express.Router();

router.get('/', obtenerUsuario);
router.post('/', crearUsuario);
router.get('/:id', obtenerUsuarioPorId);
router.put('/:id/carrito', añadirMiCarrito);
router.put('/:id/ordenes', añadirOrden);
router.put('/:id/eliminar-de-carrito', eliminarProductoCarrito);
router.put('/:id/eliminar-de-lista-deseos', eliminarProductoListaDeseos);
router.put('/:id/pedidos', añadirPedido);
router.put('/:id/lista-deseos', añadirMiListaDeDeseos);

export default router;