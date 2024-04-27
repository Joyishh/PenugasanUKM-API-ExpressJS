const express = require('express');
const { createTodoList, getsTodoList, getTodoList, updateTodoList, deleteTodoList } = require('../../resolvers/todolists');

const router = express.Router();

router.post('/:user_id', createTodoList);
router.get('/', getsTodoList);
router.get('/:id', getTodoList);
router.put('/:id/:user_id', updateTodoList);
router.delete('/:id', deleteTodoList);

module.exports = router;
