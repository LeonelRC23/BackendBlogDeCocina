import { usuarioModel } from '../database/models/usuarioSchema.js';
import bcrypts from 'bcryptjs';

export const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const emailValidacion = await usuarioModel.findOne({ email: email });
    if (emailValidacion) {
      res.status(200).json({
        mensaje: 'El usuario ya existe',
      });
    } else {
      const saltos = await bcrypts.genSalt(8);
      const passEncriptada = await bcrypts.hash(password, saltos);
      const userCreate = new usuarioModel({
        email: email,
        password: passEncriptada,
        role: role,
      });
      userCreate.save();
      res.status(200).json({
        mensaje: 'Usuario registrado correctamente',
      });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error interno',
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailValidacion = await usuarioModel.findOne({ email: email });
    if (emailValidacion) {
      const passwordValidacion = await bcrypts.compare(
        password,
        emailValidacion.password
      );
      if (passwordValidacion) {
        res.status(200).json({
          mensaje: emailValidacion,
        });
      } else {
        res.status(404).json({
          mensaje: 'Email o contraseña incorrecta',
        });
      }
    } else {
      res.status(404).json({
        mensaje: 'Email o contraseña incorrecta',
      });
    }
  } catch (error) {}
};
