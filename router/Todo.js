const express = require('express');
const router = express.Router();

const {createTodo}= require('../controller/createTodo');
const {getTodos} = require('../controller/getTodo')

router.post('/createTodo', createTodo);
router.get('/getTodos', getTodos);

module.exports = router;