import mongoose from 'mongoose';
import { verifyToken } from './generateToken.js';
import { usuarioModel } from '../database/models/usuarioSchema.js';

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();

    const tokenData = await verifyToken(token);
    if (tokenData.id) {
      next();
    } else {
      res.status(409);
      res.send({ error: 'No puede realizar esta acción' });
    }
  } catch (error) {
    res.status(409).send({ error: 'Error de autenticacion.' });
  }
};

export const checkRoleAuth = (roles) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();
    const tokenData = await verifyToken(token);
    const usuario = await usuarioModel.findOne({ _id: tokenData.id });
    if ([].concat(roles).includes(usuario.role)) {
      next();
    } else {
      res.status(409).send({ error: 'No tienes permisos' });
    }
  } catch (e) {
    res.status(409);
    res.send({ error: 'Error de autenticacion.' });
  }
};
