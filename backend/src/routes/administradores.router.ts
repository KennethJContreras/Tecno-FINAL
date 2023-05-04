import express from 'express';
import { obtenerAdministrador, obtenerAdministradores } from '../controllers/administradores.controller';

const router = express.Router();

router.get('/', obtenerAdministradores);
router.get('/:id', obtenerAdministrador);

export default router;