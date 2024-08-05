const { conexionDB } = require('../db.js');

const ctrl = {};

ctrl.getTask = async (req, res) => {
    
    const connection = await conexionDB();

    const result = await connection.query('SELECT * FROM `tasks`');

    res.json(result[0]);
}

ctrl.getTaskId = async (req, res) => {

    const connection = await conexionDB();
    
    const result = await connection.query('SELECT * FROM `tasks`');
    
    const id = parseInt(req.params.id);
     
    const tasks = result[0];

    const taskId = tasks.find(t => t.id == id)

    if(taskId){
        res.json(taskId)
    }else{
        res.json({msg: "TAREA NO ENCONTRADA"})
    }

    
}

// ctrl.postTask = (req, res) => {
    
// }

// ctrl.putTask = (req, res) => {
    
// }

// ctrl.deleteTask = (req, res) => {
    
// }

module.exports = ctrl;
