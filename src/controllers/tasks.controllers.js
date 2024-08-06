const { conexionDB } = require('../db.js');

const ctrl = {};

ctrl.getTask = async (req, res) => {
    
    const connection = await conexionDB();

    const [result] = await connection.query('SELECT * FROM `tasks`');

    if(result.length === 0){
        
        return res.status(200).json({
            msg: "TODAVÍA NO EXISTEN TAREAS"
        })

    }else{    
        res.status(200).json(result);
    }

}

ctrl.getTaskId = async (req, res) => {

    const connection = await conexionDB();
    
    const id = parseInt(req.params.id);

    const [result] = await connection.query('SELECT * FROM tasks WHERE id=?', id);

    if(result.length > 0){
        return res.status(200).json(result);
    }else{
        res.status(404).json({
            msg: 'LA TAREA NO EXISTE'
        })
    }    
}

ctrl.deleteTask = async (req, res) => {

    const connection = await conexionDB();
    
    const id = parseInt(req.params.id);

    const [result] = await connection.query('SELECT * FROM tasks WHERE id=?', id)

    if(result <= 0){
        return res.status(404).json({
            msg: 'LA TAREA NO EXISTE'
        })
    }else{
        connection.query('DELETE FROM tasks WHERE id=?', id)
        res.status(200).json({
            msg: 'TAREA ELIMINADA CON ÉXITO'
        })
    }
}

ctrl.postTask = async (req, res) => {
    
    const connection = await conexionDB();

    const {title, description, isComplete} = req.body;

    await connection.query('INSERT INTO `tasks`(`title`, `description`, `isComplete`) VALUES (?, ?, ?)', [title, description, isComplete])

    res.status(200).json({
            msg: "TAREA CREADA CON ÉXITO"
        })
    
}

ctrl.putTask = async (req, res) => {

    const connection = await conexionDB();

    const id = parseInt(req.params.id);

    const {title, description, isComplete} = req.body;  
    
    const [taskId] = await connection.query('SELECT * FROM tasks WHERE id=?', id);

    if(taskId.length === 0){

        return res.status(404).json({
            msg: "TAREA NO ENCONTRADA"
        })

    }else{
        
        await connection.query('UPDATE `tasks` SET `title`= (?),`description`= (?),`isComplete`= (?) WHERE id = (?)', [title, description, isComplete, id])

        res.status(200).json({
            msg: "TAREA EDITADA CON ÉXITO"
        })
    }

}


module.exports = ctrl;
