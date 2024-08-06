const { conexionDB } = require('../db.js');

const ctrl = {};

// Función para obtener todas las tareas
ctrl.getTask = async (req, res) => {
    
    const connection = await conexionDB();

    // Consulta SQL para obtener todas las tareas
    const [result] = await connection.query('SELECT * FROM `tasks`');

    // Verificar si no hay tareas
    if(result.length === 0){
        
        return res.status(200).json({
            msg: "TODAVÍA NO EXISTEN TAREAS"
        })

    // Retornar todas las tareas en formato JSON
    }else{    
        res.status(200).json(result);
    }

}

// Función para obtener una tarea específica por ID
ctrl.getTaskId = async (req, res) => {

    const connection = await conexionDB();
    
    const id = parseInt(req.params.id);

    const [result] = await connection.query('SELECT * FROM tasks WHERE id=?', id);

    // Verificar si la tarea existe
    if(result.length > 0){
        return res.status(200).json(result);

    // Retornar mensaje de error si la tarea no existe
    }else{
        res.status(404).json({
            msg: 'LA TAREA NO EXISTE'
        })
    }    
}

// Función para eliminar una tarea por ID
ctrl.deleteTask = async (req, res) => {

    const connection = await conexionDB();
    
    const id = parseInt(req.params.id);

    const [result] = await connection.query('SELECT * FROM tasks WHERE id=?', id)

    if(result <= 0){
        return res.status(404).json({
            msg: 'LA TAREA NO EXISTE'
        })
    
    // Eliminar la tarea si existe
    }else{
        connection.query('DELETE FROM tasks WHERE id=?', id)
        res.status(200).json({
            msg: 'TAREA ELIMINADA CON ÉXITO'
        })
    }
}

// Función para crear una nueva tarea
ctrl.postTask = async (req, res) => {
    
    const connection = await conexionDB();

    const {title, description, isComplete} = req.body;

    // Insertar nueva tarea en la base de datos
    await connection.query('INSERT INTO `tasks`(`title`, `description`, `isComplete`) VALUES (?, ?, ?)', [title, description, isComplete])

    res.status(200).json({
            msg: "TAREA CREADA CON ÉXITO"
        })
    
}

// Función para actualizar una tarea por ID
ctrl.putTask = async (req, res) => {

    const connection = await conexionDB();

    const id = parseInt(req.params.id);

    const {title, description, isComplete} = req.body;  
    
    // Verificar si la tarea existe
    const [taskId] = await connection.query('SELECT * FROM tasks WHERE id=?', id);

    if(taskId.length === 0){

        return res.status(404).json({
            msg: "TAREA NO ENCONTRADA"
        })

    // Actualizar la tarea si existe
    }else{
        
        await connection.query('UPDATE `tasks` SET `title`= (?),`description`= (?),`isComplete`= (?) WHERE id = (?)', [title, description, isComplete, id])

        res.status(200).json({
            msg: "TAREA EDITADA CON ÉXITO"
        })
    }

}


module.exports = ctrl;
