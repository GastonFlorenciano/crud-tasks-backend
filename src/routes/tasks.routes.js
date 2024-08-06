const router = require('express').Router();
const { getTask, getTaskId, deleteTask, postTask, putTask } = require('../controllers/tasks.controllers.js')

router.get('/tasks', getTask);
router.get('/task/:id', getTaskId);
router.delete('/task/:id', deleteTask);
router.put('/task/:id', putTask);
router.post('/tasks', postTask);

module.exports = router;