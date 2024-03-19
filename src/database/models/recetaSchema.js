import mongoose from 'mongoose';

const recetaSchema = new mongoose.Schema({
  nombreReceta: {
    type: String,
    trim: true,
    require: true,
  },
  descripcionBreve: {
    type: String,
    trim: true,
    require: true,
  },
  descripcionAmplia: {
    type: String,
    trim: true,
    require: true,
  },
  ingredientes: {
    type: String,
    trim: true,
    require: true,
  },
  preparacion: {
    type: String,
    trim: true,
    require: true,
  },
  autor: {
    type: String,
    trim: true,
    require: true,
  },
  fecha: {
    type: Date,
    trim: true,
    require: true,
  },
  imagen: {
    type: String,
    trim: true,
    require: true,
  },
});

export const recetaModel = mongoose.model('receta', recetaSchema);
