const knex = require('../../databases');
const { check, validationResult } = require('express-validator');

module.exports = {
  createTodoList: async (req, res) => {
    const { title, description } = req.body;
    const { user_id } = req.params;
    await check('title').isString().notEmpty().run(req);
    await check('description').isString().notEmpty().run(req);
    const result = validationResult(req);
    if (!result.isEmpty()) return res.status(400).json({ errors: result.array() });
    const todolist = await knex('todolists').insert({
      user_id,
      title,
      description,
    });
    if (todolist.length == 0) return res.status(400).json({ message: 'Failed Create Todo List' });
    return res.status(200).json({ message: 'Success Create Todo List' });
  },
  getsTodoList: async (req, res) => {
    const todolist = await knex('todolists').select('*');
    return res.status(200).json({ data: todolist, message: 'Berhasil mengambil semua data todolists' });
  },
  getTodoList: async (req, res) => {
    const { id } = req.params;
    const todolist = await knex('todolists').select('*').where({ id });
    return res.status(200).json({ data: todolist, message: 'Berhasil mengambil semua data todolist' });
  },
  updateTodoList: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const todolist = await knex('todolists').select('*').where({ id });
    if (!todolist) return res.status(400).json({ message: 'Data tidak ditemukan' });
    await knex('todolists')
      .update({
        title,
        description,
      })
      .where({ id });
    return res.status(200).json({ message: 'berhasil memperbarui data todolist' });
  },
  deleteTodoList: async (req, res) => {
    const { id } = req.params;
    const todolist = await knex('todolists').where('id', id).del();
    return res.status(200).json({ message: 'Success Delete Todo List' });
  },
};
