import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI);

const datosConexion = mongoose.connection;
datosConexion.once('open', () => {
  console.log('Conexion a la BD establecida');
});
