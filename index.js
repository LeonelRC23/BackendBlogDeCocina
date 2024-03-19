import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import './src/database/config.js';
import { routerReceta } from './src/routes/recetasRoutes.js';
import { routerUsuario } from './src/routes/usuarioRoutes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routerReceta);
app.use('/', routerUsuario);

app.set('port', process.env.PORT || 5025);
app.listen(app.get('port'), () => {
  console.log('Estoy en el puerto ' + app.get('port'));
});
