import { Router }  from 'express';
import { getTask, getTaskId, deleteTask, postTask, putTask } from '../controllers/tasks.controllers.js';
import { applyValidations } from '../applyValidations.js';
import { validationsPostTask, validationsDeleteTask } from '../validations.js'

const tasksRouter = Router();

//Creación de las respectivas rutas con sus métodos y sus funciones
tasksRouter.get('/tasks', getTask);
tasksRouter.get('/task/:id', getTaskId);
tasksRouter.delete('/task/:id', deleteTask);
tasksRouter.put('/task/:id', validationsDeleteTask, applyValidations, putTask);
tasksRouter.post('/tasks', validationsPostTask, applyValidations, postTask);

export { tasksRouter };