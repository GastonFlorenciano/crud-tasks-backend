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
// ctrl.postTask = (req, res) => {
    
// }

// ctrl.putTask = (req, res) => {
    
// }


module.exports = ctrl;
