const { Router } = require('express')
const { createTodo, getTodo, deleteTodo, updateTodo } = require('../controllers/todoController')

const router = Router()

router.get('/', getTodo)
router.post('/', createTodo)
router.delete('/', deleteTodo)
router.put('/', updateTodo)


module.exports = router