const { Router } = require('express');
const todoController = require('../controllers/todoController');

const router = Router();


router.route('/:id').get(todoController.getTodo).put(todoController.updateTodo).delete(todoController.deleteTodo);
router.route(`/`).post(todoController.createTodo).get(todoController.getAllTodos)

module.exports = router;
