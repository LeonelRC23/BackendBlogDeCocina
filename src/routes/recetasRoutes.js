import express from 'express';
const router = express.Router();
import {
  getRecetas,
  getReceta,
  eliminarReceta,
  newReceta,
  modificarReceta,
} from '../controllers/recetasController.js';

export const routerReceta = router
  .get('/recetas', getRecetas)
  .post('/recetas', newReceta)
  .put('/recetas/:id', modificarReceta)
  .delete('/recetas/:id', eliminarReceta)
  .get('/recetas/:id', getReceta);
