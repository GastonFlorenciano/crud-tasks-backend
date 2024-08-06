const router = require('express').Router();
const { getTask, getTaskId, deleteTask, postTask } = require('../controllers/tasks.controllers.js')

router.get('/', getTask);
router.get('/task/:id', getTaskId);
router.delete('/task/:id', deleteTask);
router.post('/task', postTask);

module.exports = router;