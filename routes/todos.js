const express = require('express');
const router = express.Router();
const {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoStats
} = require('../controllers/todoController');

router.route('/').get(getTodos).post(createTodo);
router.get('/stats', getTodoStats);
router.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;