const router = require('express').Router();
const { getTask, getTaskId, deleteTask, postTask, putTask } = require('../controllers/tasks.controllers.js')

//Creación de las respectivas rutas con sus métodos y sus funciones
router.get('/tasks', getTask);
router.get('/tasks/:id', getTaskId);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', putTask);
router.post('/tasks', postTask);

module.exports = router;