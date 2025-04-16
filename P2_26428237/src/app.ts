/*import express from 'express';
import path from 'path';
import indexRouter from './routes/index';

const app = express();
const port = 3000;

// Configurar 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurar rutas
app.use('/', indexRouter);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});*/
import express from 'express';
import path from 'path';
import indexRouter from './routes/index';

const app = express();
const port = 3000;

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views/index')); // Asegúrate que apunta a tu carpeta views

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../views'))); // Para archivos estáticos

// Configurar rutas
app.use('/', indexRouter);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});