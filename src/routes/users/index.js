const express = require('express');
const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../../resolvers/users');

const router = express.Router();

router.post('/:user_id', createUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
