const router = require('express').Router();
const { getTask, getTaskId } = require('../controllers/tasks.controllers.js')

router.get('/', getTask);
router.get('/task/:id', getTaskId);

module.exports = router;