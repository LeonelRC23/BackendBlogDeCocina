import express from 'express';
const router = express.Router();
import { register, login } from '../controllers/usuarioController.js';

export const routerUsuario = router
  .post('/login', login)
  .post('/register', register);
