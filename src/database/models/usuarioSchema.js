import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    require: true,
  },
  password: {
    type: String,
    trim: true,
    require: true,
  },
  role: {
    type: String,
    trim: true,
    require: true,
  },
});

export const usuarioModel = mongoose.model('usuario', usuarioSchema);
