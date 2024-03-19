import { recetaModel } from '../database/models/recetaSchema.js';

export const getRecetas = async (req, res) => {
  try {
    const recetas = await recetaModel.find();
    res.status(200).json(recetas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'No se pudo encontrar la lista de recetas',
    });
  }
};

export const getReceta = async (req, res) => {
  try {
    const { id } = req.params;
    const receta = await recetaModel.findById(id);
    res.status(200).json(receta);
  } catch (error) {
    res.status(404).json({
      mensaje: 'No se encontro la receta solicitada',
    });
  }
};

export const newReceta = async (req, res) => {
  try {
    const {
      nombreReceta,
      descripcionBreve,
      descripcionAmplia,
      ingredientes,
      preparacion,
      autor,
      fecha,
      imagen,
    } = req.body;
    const recetaCreate = new recetaModel({
      nombreReceta: nombreReceta,
      descripcionBreve: descripcionBreve,
      descripcionAmplia: descripcionAmplia,
      ingredientes: ingredientes,
      preparacion: preparacion,
      autor: autor,
      fecha: fecha,
      imagen: imagen,
    });
    recetaCreate.save();
    res.status(200).json({
      mensaje: 'Receta cargada',
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'error interno',
      error: error,
    });
  }
};

export const modificarReceta = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombreReceta,
      descripcionBreve,
      descripcionAmplia,
      ingredientes,
      preparacion,
      autor,
      fecha,
      imagen,
    } = req.body;
    const recetaUpdate = await recetaModel.findByIdAndUpdate(
      { _id: id },
      {
        nombreReceta: nombreReceta,
        descripcionBreve: descripcionBreve,
        descripcionAmplia: descripcionAmplia,
        ingredientes: ingredientes,
        preparacion: preparacion,
        autor: autor,
        fecha: fecha,
        imagen: imagen,
      }
    );
    res.status(200).json({
      mensaje: 'Receta actualizada',
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'error interno',
      error: error,
    });
  }
};

export const eliminarReceta = async (req, res) => {
  try {
    const { id } = req.params;
    const buscarReceta = await recetaModel.findById(id);
    if (!buscarReceta) {
      return res.status(404).json({
        mensaje: 'No se pudo eliminar la receta, receta no encontrada',
      });
    }
    await recetaModel.findByIdAndDelete(id);
    res.status(200).json({
      mensaje: 'La receta fue eliminada correctamente',
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Ocurrio un error, vuelva a intentarlo',
    });
  }
};
