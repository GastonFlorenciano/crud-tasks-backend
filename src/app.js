//Se importan los módulos correspondientes
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express() // Crea una instancia de la aplicación Express
const PORT = process.env.PORT ||  3000; // Define el puerto en el que la aplicación escuchará (3000)

//Middlewares
app.use(cors()); // Para permitir que la aplicación acceda a recursos en un servidor ubicado en otro dominio
app.use(morgan('dev')); // Para registrar solicitudes HTTP en la consola en modo 'dev'
app.use(express.json()); // Para parsear cuerpos de solicitudes en formato JSON

app.use(require('./routes/tasks.routes')); // Middleware para manejar las rutas definidas en el archivo 'tasks.routes'

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => console.log(`ESCUCHANDO EN EL PUERTO ${PORT}`))