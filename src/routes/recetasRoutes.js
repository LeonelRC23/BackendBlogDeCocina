import express from 'express';
const router = express.Router();
import {
  getRecetas,
  getReceta,
  eliminarReceta,
  newReceta,
  modificarReceta,
} from '../controllers/recetasController.js';
import { checkAuth, checkRoleAuth } from '../helpers/auth.js';

export const routerReceta = router
  .get('/recetas', getRecetas)
  .post('/recetas', checkAuth, checkRoleAuth(['admin']), newReceta)
  .put('/recetas/:id', checkAuth, checkRoleAuth(['admin']), modificarReceta)
  .delete('/recetas/:id', checkAuth, checkRoleAuth(['admin']), eliminarReceta)
  .get('/recetas/:id', getReceta);
