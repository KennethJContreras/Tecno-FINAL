import express from 'express';
import { obtenerEmpresa, obtenerEmpresas, crearEmpresa, añadirProductoEmpresa } from '../controllers/empresas.controller';

const router = express.Router();

router.get('/', obtenerEmpresas);
router.get('/:id', obtenerEmpresa);
router.post('/', crearEmpresa);
router.put('/:id', añadirProductoEmpresa);

export default router;