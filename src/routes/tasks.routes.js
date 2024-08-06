const router = require('express').Router();
const { getTask, getTaskId, deleteTask } = require('../controllers/tasks.controllers.js')

router.get('/', getTask);
router.get('/task/:id', getTaskId);
router.delete('/task/:id', deleteTask);

module.exports = router;