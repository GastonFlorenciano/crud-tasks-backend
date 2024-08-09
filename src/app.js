//Se importan los módulos correspondientes
import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { tasksRouter } from './routes/tasks.routes.js';

const app = express() // Crea una instancia de la aplicación Express
const PORT = process.env.PORT ||  3000; // Define el puerto en el que la aplicación escuchará (3000)

//Middlewares
app.use(cors()); // Para permitir que la aplicación acceda a recursos en un servidor ubicado en otro dominio
app.use(morgan('dev')); // Para registrar solicitudes HTTP en la consola en modo 'dev'
app.use(json()); // Para parsear cuerpos de solicitudes en formato JSON

app.use('/', tasksRouter); // Middleware para manejar las rutas definidas en el archivo 'tasks.routes'

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => console.log(`ESCUCHANDO EN EL PUERTO ${PORT}`))