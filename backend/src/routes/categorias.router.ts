import express from 'express';
import { obtenerCategoria, obtenerCategorias, crearCategoria, añadirProductoCategoria } from '../controllers/categorias.controller';

const router = express.Router();

router.get('/', obtenerCategorias);
router.get('/:id', obtenerCategoria);
router.post('/', crearCategoria);
router.put('/:id', añadirProductoCategoria);

export default router;