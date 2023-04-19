const { Todo } = require('../../db')
const seeders = require('../../seeders.json')

function throwError(messaje) {
    throw messaje
}


module.exports = {
    createTodo: async (req, res) => {
        const { nombre, descripcion, proridad, estado } = req.body
        const { seed } = req.query
        try {
            if(seed === "true"){
                const data = await Todo.bulkCreate(seeders)
                console.log(data)
                res.status(200).json('se ha sembrado la base de datos')
            }else{
                
                if (!nombre || !descripcion || !proridad, !estado) { throw 'faltan parametros requeridos!' }
    
                const newTodo = await Todo.create(req.body)
    
                newTodo
                    ? res.status(200).json({ estado: 'creado', newTodo })
                    : throwError('no se pudo crear el todo verificar parametros')
            }


        } catch (error) {
            res.status(400).json({ estado: 'error', error })
        }

    },

    getTodo: async (req, res) => {

        try {
            const todos = await Todo.findAll()
          
            todos.length>0
                ? res.status(200).json({ estado: 'procesado', todos })
                : res.status(200).json({ estado: 'procesado', data: "no hay tareas en la base de datos" })

        } catch (error) {
            res.status(500).json({ estado: 'error', error })
        }
    },
    deleteTodo: async (req, res) => {

        const { id, all } = req.body

        try {
            if (!id) { throwError('falta parametro id') }

            const deleted = Todo.destroy({ where: { id }, truncate: !all ? false : true })

            deleted.length
                ? res.status(202).json({ estado: 'eliminado', response: `la tarea se ha eliminado satisfactoriamente id: ${id}` })
                : throwError('no se pudo eliminar la tarea')

        } catch (error) {
            res.status(500).json({ estado: 'error', error })
        }

    },
    updateTodo: async (req, res) => {
        const { id } = req.body
        try {
            const updated = await Todo.update(req.body, { where: { id } })
            if(updated[0] != 0)res.json("actualizado")
            else throwError("no se pudo actualizar")
        } catch (error) {
            res.status(500).json({ estado: 'error', error })
        }
    }
}