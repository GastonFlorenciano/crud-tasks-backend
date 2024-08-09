import { Router }  from 'express';
import { getTask, getTaskId, deleteTask, postTask, putTask } from '../controllers/tasks.controllers.js';

const tasksRouter = Router();

//Creación de las respectivas rutas con sus métodos y sus funciones
tasksRouter.get('/tasks', getTask);
tasksRouter.get('/task/:id', getTaskId);
tasksRouter.delete('/task/:id', deleteTask);
tasksRouter.put('/task/:id', putTask);
tasksRouter.post('/tasks', postTask);

export { tasksRouter };